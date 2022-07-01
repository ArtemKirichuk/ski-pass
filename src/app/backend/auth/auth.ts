import { UserType } from 'src/app/modules/shared/interfaces';
import { User } from '../user/user';

export class Auth {
    loginKey = 'me';
    login: string | null = null;
    User:User;
    static instance = new Auth();
    private constructor() { 
        this.User = User.instance;
    }
    signIn(inputUser: UserType): boolean {
        const users = this.User.get<UserType>();
        //проверяем существование localstore пользователей
        const bExistUser:boolean = users.some(e => e.name == inputUser.name && e.password == inputUser.password);
        if (bExistUser) {
            this.login = inputUser.name;
            localStorage.setItem(this.loginKey, inputUser.name);
        } else {
            this.login = null;
        }
        return bExistUser;
    }
    signOut() {
        this.login = null;
        localStorage.removeItem(this.loginKey);
    }
    checkAuth(): string {
        this.login = <string>localStorage.getItem(this.loginKey);
        return this.login;
    }
}
