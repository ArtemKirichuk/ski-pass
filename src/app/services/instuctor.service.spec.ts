import { TestBed } from '@angular/core/testing';

import { InstuctorService } from './instuctor.service';

describe('InstuctorService', () => {
    let service: InstuctorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(InstuctorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
