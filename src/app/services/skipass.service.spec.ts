import { TestBed } from '@angular/core/testing';

import { SkipassService } from './skipass.service';

describe('SkipassService', () => {
    let service: SkipassService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SkipassService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
