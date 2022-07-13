import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, map, Subscription } from 'rxjs';
import { AddNewInstructorComponent } from 'src/app/modules/add-new-instructor/add-new-instructor.component';
import { EditInstructorComponent } from 'src/app/modules/edit-instructor/edit-instructor.component';
import { InstuctorService } from 'src/app/services/instuctor.service';
import { InstructorType, KeyInstructorType, updateType } from 'src/app/types/types';
import { InstructorDeleteComponent } from '../instructor-delete/instructor-delete.component';
import { InstructorInfoComponent } from '../instructor-info/instructor-info.component';

@Component({
    selector: 'app-instructors-mini',
    templateUrl: './instructors-mini.component.html',
    styleUrls: ['./instructors-mini.component.scss']
})
export class InstructorsMiniComponent implements OnInit, OnDestroy {

    INSTRUCTORS = 'Инструкторы';
    ADD = 'Добавить нового';
    ALL = 'Все';

    //instructors: InstructorType[] = [];
    instructors$: BehaviorSubject<InstructorType[]> = new BehaviorSubject<InstructorType[]>([]);
    showInstructors = true;
    subscription: Subscription = new Subscription();

    arrowUpURL = '../../../assets/images/arrow-up-icon.svg';
    arrowDownURL = '../../../assets/images/arrow-down-icon.svg';
    minimizeURL = this.arrowUpURL;

    constructor(private instructorService: InstuctorService,
                private dialog: MatDialog) {
        
    }

    ngOnInit(): void {
        this.instructorService.getInstructors().subscribe(resp => {
            //this.instructors = resp.slice(0, 12);
            this.instructorService.sendInstructorToStream(resp);
        });

        this.subscription = this.instructorService.getInstructorListStream$()
            .pipe(
                map(value => value.slice(0, 10))
            )
            .subscribe(resp=>{
                this.instructors$.next(resp);
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    minimize(): void {
        this.showInstructors = !this.showInstructors;

        if (this.minimizeURL === this.arrowUpURL) {
            this.minimizeURL = this.arrowDownURL;
        }
        else {
            this.minimizeURL = this.arrowUpURL;
        }
    }  

    onDeleteInstructor(instructor: InstructorType) {
        const data = { data:instructor };
        const dialogRef = this.dialog.open(InstructorDeleteComponent, data);

        dialogRef.afterClosed().subscribe(ok => {
            if (ok) {
                this.instructorService.deleteInstructor(instructor).subscribe(resp =>{
                    if (resp) {
                        this.instructorService.getInstructors().subscribe(instructors => {
                            this.instructorService.sendInstructorToStream(instructors);
                        });
                    }
                });
            }
        });
    }

    onEditInstructor(instructor: InstructorType): void {
        const data = {data : {instructor : instructor}, width:'35%'};
        const dialogRef = this.dialog.open(EditInstructorComponent, data);

        dialogRef.afterClosed().subscribe(editedtInstructor => {
            if (editedtInstructor) {
                const update: updateType<KeyInstructorType, InstructorType> = {
                    oldKey: { fio: instructor.fio},
                    newRow: editedtInstructor
                };
                this.instructorService.changeInstructor(update).subscribe(ok => {
                    if (ok) {
                        this.updateInstructors();
                    }                    
                });
            }
        });
    }

    addNewInstructor(): void {
        const dialogRef = this.dialog.open(AddNewInstructorComponent, {width:'35%'});
        dialogRef.afterClosed().subscribe(instructor => {
            if (instructor) {
                this.instructorService.createInstructor(instructor).subscribe(ok => {
                    if (ok) {
                        this.updateInstructors();
                    }
                    else {
                        alert('Ошибка добавления пользователя');
                    }
                });
            }
        });
    }

    updateInstructors(): void{
        this.instructorService.getInstructors().subscribe(instructorsList => {
            this.instructorService.sendInstructorToStream(instructorsList);
        });
    }

    onShowInstructor(instructor: InstructorType): void {
        const params = { data: instructor, width: '511px',  height: '766px'};
        this.dialog.open(InstructorInfoComponent, params);
    }
}
