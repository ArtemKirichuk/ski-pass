import { Auth } from './auth';

describe('Auth', () => {
    it('should create an instance', () => {
        expect( Auth.instance).toBeTruthy();
    });
});
