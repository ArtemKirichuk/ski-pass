import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VisitorType } from 'src/app/types/types';

@Component({
    selector: 'app-client-delete',
    templateUrl: './client-delete.component.html',
    styleUrls: ['./client-delete.component.scss']
})
export class ClientDeleteComponent {

    TITLE = 'Удаление посетителя';
    TEXT = 'Вы уверены, что хотите удалить карточку этого посетителя?';
    OK = 'OK';

    visitor: VisitorType = {} as VisitorType;
    constructor(@Inject(MAT_DIALOG_DATA) public _visitor: VisitorType,
                private dialogRef: MatDialogRef<ClientDeleteComponent>) { 
        this.visitor = _visitor;
    }

    closeNo() {
        this.dialogRef.close(null);
    }

    closeYes() {
        this.dialogRef.close(true);
    }
}
