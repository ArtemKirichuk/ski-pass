import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subscription } from 'rxjs';
import { InstructorDeleteComponent } from 'src/app/components/instructor-delete/instructor-delete.component';
import { InstuctorService } from 'src/app/services/instuctor.service';
import { InstructorType } from 'src/app/types/types';
import { PaginatorComponent } from '../paginator/paginator.component';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.component.html',
    styleUrls: ['./instructors.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstructorsComponent implements OnInit, OnDestroy{

    INSTRUCTORS = 'Инструкторы';
    ADD = 'Добавить нового';

    showedInstructors: InstructorType[] = [];
    allInstructors$: BehaviorSubject<InstructorType[]> = new BehaviorSubject<InstructorType[]>([]);
    subscription: Subscription = new Subscription();
    @ViewChild('paginator') paginator:PaginatorComponent<InstructorType> | undefined;

    constructor(private dialog : MatDialog,
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

    onDeleteInstructor(instructor: InstructorType) {
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
            }
        });
    }
}
