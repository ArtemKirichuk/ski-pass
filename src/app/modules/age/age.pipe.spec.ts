import { TestBed } from '@angular/core/testing';
import { AgePipe } from './age.pipe';

describe('AgePipe', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AgePipe
            ],
            declarations: [ AgePipe
            ],
        }).compileComponents();
    });

    it('create an instance', () => {
        const pipe = new AgePipe();
        expect(pipe).toBeTruthy();
    });

    it('должен вычислить возраст', () => {
        const pipe = new AgePipe();
        const dateWasBD = new Date(1995, 0, 12);        // 27
        const dateWasntBD = new Date(1997, 8, 4);       // 24
        const dateFuture = new Date(2222, 0, 1);        // ""
        const datePastWasBD = new Date(1774, 1, 20);    // 248 
        const date0 = new Date(1992, 3, 1);
        const date1 = new Date(1991, 0, 6);
        const date2 = new Date(1990, 0, 1);
        const date3 = new Date(1989, 0, 1);
        const date4 = new Date(1988, 0, 1);
        const date5 = new Date(1987, 0, 1);
        const date6 = new Date(1986, 0, 1);
        const date7 = new Date(1985, 0, 1);
        const date8 = new Date(1984, 0, 1);
        const date9 = new Date(1983, 0, 1);
        expect(pipe.transform(dateWasBD)).toEqual('27 лет');
        expect(pipe.transform(dateWasntBD)).toEqual('24 года');
        expect(pipe.transform(dateFuture)).toEqual('');
        expect(pipe.transform(datePastWasBD)).toEqual('248 лет');
        expect(pipe.transform(date0)).toEqual('30 лет');
        expect(pipe.transform(date1)).toEqual('31 год');
        expect(pipe.transform(date2)).toEqual('32 года');
        expect(pipe.transform(date3)).toEqual('33 года');
        expect(pipe.transform(date4)).toEqual('34 года');
        expect(pipe.transform(date5)).toEqual('35 лет');
        expect(pipe.transform(date6)).toEqual('36 лет');
        expect(pipe.transform(date7)).toEqual('37 лет');
        expect(pipe.transform(date8)).toEqual('38 лет');
        expect(pipe.transform(date9)).toEqual('39 лет');
    });
});
