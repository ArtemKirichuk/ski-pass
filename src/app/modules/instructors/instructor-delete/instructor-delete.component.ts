import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstructorType } from 'src/app/types/types';

@Component({
    selector: 'app-instructor-delete',
    templateUrl: './instructor-delete.component.html',
    styleUrls: ['./instructor-delete.component.scss']
})
export class InstructorDeleteComponent {
  
    TITLE = 'Удаление инструктора';
    TEXT = 'Вы уверены, что хотите удалить карточку этого инструктора?';
    OK = 'OK';

    instructor: InstructorType = {} as InstructorType;

    constructor(@Inject(MAT_DIALOG_DATA) public _instructor: InstructorType,
                private dialogRef: MatDialogRef<InstructorDeleteComponent>) { 
        this.instructor = _instructor;
    }

    closeNo() {
        debugger
        this.dialogRef.close(null);
    }

    closeYes() {
        this.dialogRef.close(true);
    }
}
