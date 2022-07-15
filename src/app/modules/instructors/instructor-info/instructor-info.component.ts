import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditInstructorComponent } from 'src/app/modules/instructors/edit-instructor/edit-instructor.component';
import { InstuctorService } from 'src/app/services/instuctor.service';
import { InstructorType, KeyInstructorType, updateType } from 'src/app/types/types';
import { InstructorDeleteComponent } from '../instructor-delete/instructor-delete.component';

@Component({
    selector: 'app-instructor-info',
    templateUrl: './instructor-info.component.html',
    styleUrls: ['./instructor-info.component.scss']
})
export class InstructorInfoComponent {

    TITLE = 'Карточка инструктора';
    BIRTHDAY = 'Дата рождения';
    SEX = 'Пол';
    APPOINTED_VISITOR = 'Назначенный посетитель';
    OK = 'OK';

    instructor: InstructorType = {} as InstructorType;

    constructor(@Inject(MAT_DIALOG_DATA) public _instructor: InstructorType,
                private instructorService: InstuctorService,
                private dialog: MatDialog,
                private dialogRef: MatDialogRef<InstructorInfoComponent>) { 
        this.instructor = _instructor;
    }

    updateInstructors(): void{
        this.instructorService.getInstructors().subscribe(instructorsList => {
            this.instructorService.sendInstructorToStream(instructorsList);
        });
    }

    onEditInstructor(): void {
        const params = {data : {instructor : this.instructor}, width:'35%'};
        const editDialogRef = this.dialog.open(EditInstructorComponent, params);
        
        editDialogRef.afterClosed().subscribe(editedInstructor => {
            if (editedInstructor) {
                const update: updateType<KeyInstructorType, InstructorType> = {
                    oldKey: { fio: this.instructor.fio },
                    newRow: editedInstructor
                };
                this.instructorService.changeInstructor(update).subscribe(ok => {
                    if (ok) {
                        this.updateInstructors();
                        this.dialogRef.close();
                    }
                });
            }     
        });
    }

    onDeleteInstructor(): void {
        const data = { data: this.instructor };
        const dialogRef = this.dialog.open(InstructorDeleteComponent, data);
        dialogRef.afterClosed().subscribe(ok => {
            if (ok) {
                this.instructorService.deleteInstructor(this.instructor).subscribe(resp => {
                    if (resp) {
                        this.updateInstructors();
                        this.dialogRef.close();
                    }
                });
            }
        });
    }
}
