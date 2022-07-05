import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsMiniComponent } from './clients-mini.component';

describe('ClientsMiniComponent', () => {
    let component: ClientsMiniComponent;
    let fixture: ComponentFixture<ClientsMiniComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ClientsMiniComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ClientsMiniComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
