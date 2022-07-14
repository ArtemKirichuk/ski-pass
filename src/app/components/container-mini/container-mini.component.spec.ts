import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMiniComponent } from './container-mini.component';

describe('ContainerMiniComponent', () => {
  let component: ContainerMiniComponent;
  let fixture: ComponentFixture<ContainerMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
