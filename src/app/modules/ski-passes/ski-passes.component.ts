import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, of, Subject, switchMap, takeUntil } from 'rxjs';
import { SkipassService } from 'src/app/services/skipass.service';
import { i18nRU } from 'src/app/modules/shared/helper';

import { updateType, SkiPassType, KeySkiPassType } from 'src/app/types/types';
// import { KeySkiPassType, SkiPassType } from '../shared/interfaces';
import { SkiPassesFormComponent } from './form/form.component';

@Component({
    selector: 'app-ski-passes',
    templateUrl: './ski-passes.component.html',
    styleUrls: ['./ski-passes.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkiPassesComponent implements  OnDestroy {
    // skipasses$!: Observable<SkiPassType[]>;
    skipassesBe$: BehaviorSubject<SkiPassType[]> ;
    destroy$: Subject<boolean>;
    updateSkipass$: Observable<SkiPassType[]>;
    i18nRU = i18nRU
    constructor(
        private matDialog: MatDialog,
        private skipassService: SkipassService
    ) {
        this.skipassesBe$ = new BehaviorSubject<SkiPassType[]>([] as SkiPassType[])
        this.destroy$ = new Subject();
        this.updateSkipass$ = new Observable(observer => {
            this.skipassService.get().subscribe(skipasses => {
                
                this.skipassesBe$.next(skipasses);
                observer.next();
            });

        });
        this.updateSkipass$.subscribe();
    }
    openCreateForm(): void {
        const dialogRef = this.matDialog.open(SkiPassesFormComponent, { height: '730px', width: '500px' });
        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((skipass: SkiPassType) => {
                if (skipass) {
                    this.create(skipass);
                }
            });
    }
    create(data: SkiPassType): void {
        this.skipassService.create(data)
        .pipe(
            takeUntil(this.destroy$),
            switchMap(() => this.updateSkipass$)
        )
        .subscribe();
    }
    update(data: updateType<KeySkiPassType, SkiPassType>): void {
        this.skipassService.update(data).pipe(
            takeUntil(this.destroy$),
            switchMap(() => this.updateSkipass$)
        ).subscribe();
    }
    delete(event: KeySkiPassType): void {
        this.skipassService.delete(event).pipe(
            takeUntil(this.destroy$),
            switchMap(() => this.updateSkipass$)
        ).subscribe();
    }
    ngOnDestroy(): void {
        this.destroy$.next(true);
    }
}
