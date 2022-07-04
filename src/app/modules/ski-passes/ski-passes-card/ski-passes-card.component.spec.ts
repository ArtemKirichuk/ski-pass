import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiPassesCardComponent } from './ski-passes-card.component';

describe('SkiPassesComponent', () => {
    let component: SkiPassesCardComponent;
    let fixture: ComponentFixture<SkiPassesCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SkiPassesCardComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SkiPassesCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
