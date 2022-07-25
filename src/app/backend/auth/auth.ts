
import { UserType } from 'src/app/types/types';
import { User } from '../user/user';

export class Auth {
    loginKey = 'me';
    login: string | null = null;
    User:User;
    static instance = new Auth();
    private constructor() { 
        this.User = User.instance;
    }
    signIn(inputUser: UserType): UserType|undefined {
        const users = this.User.get<UserType>();
        //проверяем существование localstore пользователей
        const user:UserType|undefined = users.find(e => e.name == inputUser.name && e.password == inputUser.password);
        if (user) {
            this.login = inputUser.name;
            localStorage.setItem(this.loginKey, inputUser.name);
        } else {
            this.login = null;
        }
        return user;
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
