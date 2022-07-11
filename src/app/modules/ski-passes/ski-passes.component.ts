import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, Subject, switchMap, takeUntil } from 'rxjs';
import { SkipassService } from 'src/app/services/skipass.service';
import { i18n } from 'src/app/types/helper';
import { KeySkiPassType, SkiPassType } from '../shared/interfaces';
import { SkiPassesFormComponent } from './form/form.component';

@Component({
    selector: 'app-ski-passes',
    templateUrl: './ski-passes.component.html',
    styleUrls: ['./ski-passes.component.scss']
})
export class SkiPassesComponent extends i18n {
    skipasses$!: Observable<SkiPassType[]>;
    destroy$: Subject<boolean>;
    updateSkipass$: Observable<SkiPassType[]>;
    constructor(
        private matDialog: MatDialog,
        private skipassService: SkipassService
    ) {
        super();
        this.destroy$ = new Subject();
        this.updateSkipass$ = new Observable(observer => {
            this.skipassService.get().subscribe(skipasses => {
                observer.next(skipasses)
            })

        })
        this.updateSkipass$.subscribe(skipass => {
            this.skipasses$ = of(skipass)
        })
    }
    onChangedPage(array: number[]) {

    }
    openForm() {
        const dialogRef = this.matDialog.open(SkiPassesFormComponent, { height: '730px', width: '500px' });
        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((skipass: SkiPassType) => {
                if (skipass) {
                    this.createSkipass(skipass).subscribe(skipass => {
                        this.skipasses$ = of(skipass)
                    })
                }
            });
    }
    createSkipass(data: SkiPassType): Observable<SkiPassType[]> {
        return this.skipassService.create(data).pipe(
            takeUntil(this.destroy$),
            switchMap((q) => this.updateSkipass$)
        )
    }
    delete(event: KeySkiPassType) {
        this.skipassService.delete(event).pipe(
            takeUntil(this.destroy$),
            switchMap((isDelete) => this.updateSkipass$)
        ).subscribe(skipass => {
            this.skipasses$ = of(skipass)
        });
    }
}
