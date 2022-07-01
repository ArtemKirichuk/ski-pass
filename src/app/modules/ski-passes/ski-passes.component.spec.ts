import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiPassesComponent } from './ski-passes.component';

describe('SkiPassesComponent', () => {
    let component: SkiPassesComponent;
    let fixture: ComponentFixture<SkiPassesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SkiPassesComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SkiPassesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
