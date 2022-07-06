import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { i18n } from 'src/app/types/helper';
import { SkiPassType } from '../shared/interfaces';
import { SkiPassesFormComponent } from './form/form.component';

@Component({
    selector: 'app-ski-passes',
    templateUrl: './ski-passes.component.html',
    styleUrls: ['./ski-passes.component.scss']
})
export class SkiPassesComponent extends i18n{
    skipasses: number[] = [1, 2, 3]
    destroy$: Subject<boolean>;
    
    constructor(private matDialog: MatDialog) {
        super();
        this.destroy$ = new Subject();
    }
    onChangedPage(array: number[]) {

    }
    openForm() {
        const dialogRef = this.matDialog.open(SkiPassesFormComponent,{ height: '660px', width: '500px'});
        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((skipass: SkiPassType) => {
                if (skipass) {
                    debugger
                }
            });
    }
}
