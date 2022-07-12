import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInstructorComponent } from './select-visitor.component';

describe('SelectInstructorComponent', () => {
    let component: SelectInstructorComponent;
    let fixture: ComponentFixture<SelectInstructorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SelectInstructorComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SelectInstructorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
