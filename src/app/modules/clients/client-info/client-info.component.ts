import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditClientsComponent } from 'src/app/modules/clients/edit-clients/edit-clients.component';
import { VisitorService } from 'src/app/services/visitor.service';
import { KeyVisitorType, updateType, VisitorType } from 'src/app/types/types';
import { ClientDeleteComponent } from '../client-delete/client-delete.component';

@Component({
    selector: 'app-client-info',
    templateUrl: './client-info.component.html',
    styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent {

    TITLE = 'Карточка посетителя';
    BIRTHDAY = 'Дата рождения';
    SKI_PASS_NUMBER = 'Номер ски-пасса';
    APPOINTED_INSTRUCTOR = 'Назначенный тренер';
    OK = 'OK';

    visitor: VisitorType = { } as VisitorType;

    constructor(@Inject(MAT_DIALOG_DATA) public _visitor: VisitorType,
                private visitorService: VisitorService,
                private dialog: MatDialog,
                private dialogRef:MatDialogRef<ClientInfoComponent>) { 
        this.visitor = _visitor;
    }

    updateVisitors(): void {
        this.visitorService.getVisitors().subscribe(visitorsList => {
            this.visitorService.sendVisitorToStream(visitorsList);
        });
    }

    editVisitor(): void {
        const editDialogRef = this.dialog.open(EditClientsComponent, {data : {clients : this.visitor}, width:'500px'});
        editDialogRef.afterClosed().subscribe(editedVisitor => {
            if (editedVisitor) {
                const update: updateType<KeyVisitorType, VisitorType> = {
                    oldKey: { fio: this.visitor.fio },
                    newRow: editedVisitor
                };
                this.visitorService.changeVisitor(update).subscribe(ok => {
                    if (ok) {
                        this.updateVisitors();
                        this.dialogRef.close();
                    }
                });
            }
        });
    }

    deleteVisitor(): void {
        const data = { data: this.visitor };
        const dialogRef = this.dialog.open(ClientDeleteComponent, data);
        dialogRef.afterClosed().subscribe(resp => {
            if(resp) {
                this.visitorService.deleteVisitor(this.visitor).subscribe(resp => {
                    if (resp) {
                        this.updateVisitors();
                        this.dialogRef.close(); 
                    }
                });
            }
        });
    }
}
