import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInstructorComponent } from './add-new-instructor.component';

describe('AddNewInstructorComponent', () => {
    let component: AddNewInstructorComponent;
    let fixture: ComponentFixture<AddNewInstructorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AddNewInstructorComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AddNewInstructorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
