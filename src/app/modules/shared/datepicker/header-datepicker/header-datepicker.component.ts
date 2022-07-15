import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy } from '@angular/core';
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-header-datepicker',
    templateUrl: './header-datepicker.component.html',
    styleUrls: ['./header-datepicker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderDatepickerComponent implements OnDestroy {
    private _destroyed = new Subject<void>();


    constructor(
        public _calendar: MatCalendar<Date>,
        private _dateAdapter: DateAdapter<Date>,
        @Inject(MAT_DATE_FORMATS) public _dateFormats: MatDateFormats,
        cdr: ChangeDetectorRef,
    ) {
        _calendar.stateChanges.pipe(takeUntil(this._destroyed)).subscribe(() => cdr.markForCheck());
        _dateAdapter.getFirstDayOfWeek = () => { return 1; };   
    }

    ngOnDestroy() : void{
        this._destroyed.next();
        this._destroyed.complete();
    }

    get periodLabel() :string{
        let result = this._dateAdapter
            .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel);
        result = result[0].toLocaleUpperCase() + result.slice(1,result.length);
        return result;
    }

    previousClicked(mode: 'month' | 'year') : void{
        this._calendar.activeDate =
        mode === 'month'
            ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
            : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
    }

    nextClicked(mode: 'month' | 'year') :void{
        this._calendar.activeDate =
        mode === 'month'
            ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
            : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
    }

    getYearString(activeDate:Date):string{
        return activeDate? `${activeDate.getFullYear()}`:''; 
    }
  
}
