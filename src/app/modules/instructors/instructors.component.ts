import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subscription } from 'rxjs';
import { InstructorDeleteComponent } from 'src/app/modules/instructors/instructor-delete/instructor-delete.component';
import { InstructorInfoComponent } from 'src/app/modules/instructors/instructor-info/instructor-info.component';
import { InstuctorService } from 'src/app/services/instuctor.service';
import { InstructorType, updateType, KeyInstructorType, PersanCardType } from 'src/app/types/types';
import { EditInstructorComponent } from './edit-instructor/edit-instructor.component';
import { PaginatorComponent } from '../shared/paginator/paginator.component';
import { i18nErrors, i18nRU } from '../shared/helper';
import { AgePipe } from '../shared/age/age.pipe';
// import { KeyInstructorType } from '../shared/interfaces';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.component.html',
    styleUrls: ['./instructors.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructorsComponent implements OnInit, OnDestroy {

    width = '500px';
    showedInstructors: InstructorType[] = [];
    allInstructors$: BehaviorSubject<InstructorType[]> = new BehaviorSubject<InstructorType[]>([]);
    subscription: Subscription = new Subscription();
    i18nRU = i18nRU
    @ViewChild('paginator') paginator: PaginatorComponent<InstructorType> | undefined;

    constructor(private dialog: MatDialog,
        private instructorService: InstuctorService) {
    }

    ngOnInit(): void {
        this.instructorService.getInstructors().subscribe(resp => {
            //this.allInstructors = resp;
            this.instructorService.sendInstructorToStream(resp);
        });

        this.subscription = this.instructorService.getInstructorListStream$().subscribe(resp => {
            this.allInstructors$.next(resp);
            if (this.paginator) {
                this.paginator.allItems = resp;
                this.paginator?.setPage(this.paginator.currentPage);
            }
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onChangedPage(event: InstructorType[]): void {
        this.showedInstructors = event;
    }

    onDeleteInstructor(instructor: InstructorType, redirect?: boolean) {
        const data = { data: instructor };
        const dialogRef = this.dialog.open(InstructorDeleteComponent, data);
        dialogRef.afterClosed().subscribe(ok => {
            if (ok) {
                this.instructorService.deleteInstructor(instructor).subscribe(resp => {
                    if (resp) {
                        this.instructorService.getInstructors().subscribe(allInstructors => {
                            this.instructorService.sendInstructorToStream(allInstructors);
                        });
                    }
                });
                return
            }
            if (redirect) {
                this.onShowInstructor(instructor);
            }
        });
    }

    addNewInstructor(): void {
        const dialogRef = this.dialog.open(EditInstructorComponent,{ width : this.width});
        dialogRef.afterClosed().subscribe(instructor => {
            if (instructor) {
                this.instructorService.createInstructor(instructor).subscribe(ok => {
                    if (ok) {
                        this.updateInstructors();
                    }
                    else {
                        alert(i18nErrors.ERROR_ADD_USER);
                    }
                });
            }
        });
    }

    updateInstructors(): void {
        this.instructorService.getInstructors().subscribe(instructorsList => {
            this.instructorService.sendInstructorToStream(instructorsList);
        });
    }

    onEditInstructor(instructor: InstructorType, redirect?: boolean): void {
        
        const dialogRef = this.dialog.open(EditInstructorComponent, {data: instructor, width:this.width});

        dialogRef.afterClosed().subscribe(editedInstructor => {
            if (editedInstructor) {
                const update: updateType<KeyInstructorType, InstructorType> = {
                    oldKey: { fio: instructor.fio },
                    newRow: editedInstructor
                };
                this.instructorService.changeInstructor(update).subscribe(ok => {
                    if (ok) {
                        this.updateInstructors();
                    }
                });
                return
            }
            if (redirect) {
                this.onShowInstructor(instructor);
            }
        });
    }

    onShowInstructor(instructor: InstructorType): void {

        const dialog = this.dialog.open(InstructorInfoComponent, { data: instructor, width: this.width, height: '766px' });
        dialog.afterClosed().subscribe((edit: boolean) => {
            if (edit) {
                this.onEditInstructor(instructor, true)
            }
            else if (edit === false) {
                this.onDeleteInstructor(instructor, true)
            }
        })
    }
    getCardData(instructor: InstructorType): PersanCardType {
        return {
            header: instructor.fio,
            title: instructor.category + i18nRU.EXPERIENCE + AgePipe.prototype.transform(instructor.startWork),
            img: instructor.photo,
            deleteBtn: i18nRU.DELETE,
            editBtn: i18nRU.EDIT,
            editContext: i18nRU.APPOINTED_VISITOR
        }
    }

}
