import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsMiniComponent } from './instructors-mini.component';

describe('InstructorsMiniComponent', () => {
    let component: InstructorsMiniComponent;
    let fixture: ComponentFixture<InstructorsMiniComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ InstructorsMiniComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(InstructorsMiniComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
