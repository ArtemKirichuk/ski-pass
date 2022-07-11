import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subscription } from 'rxjs';
import { InstuctorService } from 'src/app/services/instuctor.service';
import { InstructorType } from 'src/app/types/types';
import { InstructorDeleteComponent } from '../instructor-delete/instructor-delete.component';

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

        this.subscription = this.instructorService.getInstructorListStream$().subscribe(resp=>{
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
}
