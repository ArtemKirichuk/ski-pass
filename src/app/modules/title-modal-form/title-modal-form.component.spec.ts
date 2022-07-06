import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleModalFormComponent } from './title-modal-form.component';

describe('TitleModalFormComponent', () => {
  let component: TitleModalFormComponent;
  let fixture: ComponentFixture<TitleModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleModalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
