import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProfileUserComponent } from './read-profile-user.component';

describe('ReadProfileUserComponent', () => {
  let component: ReadProfileUserComponent;
  let fixture: ComponentFixture<ReadProfileUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadProfileUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadProfileUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
