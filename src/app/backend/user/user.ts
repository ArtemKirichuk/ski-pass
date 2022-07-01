import { UserType } from "src/app/shared/interfaces";
import { crud } from "../crud";

export class User extends crud{
    private static usersKey = 'users';
    private static  usersKeys:string[] = ['name'];
    static instance:User = new User()
    private constructor(){
        super(User.usersKey,User.usersKeys)
    }
    //USER
    // updateUser(updateUser: { name: string, surname: string }): boolean {
    //     let users = this.getUsers()
    //     const editUser = users.find(e => e.name == updateUser.name)
    //     if (!editUser)
    //         return false
    //     Object.assign(editUser, updateUser)
    //     localStorage.setItem(this.usersKey, JSON.stringify(users));
    //     return true
    // }
    // getUsers(): IUser[] {
    //     let stringUsers: string = <string>localStorage.getItem(this.usersKey);
    //     return stringUsers ? JSON.parse(stringUsers) : [];
    // }
    // createUser(user: IUser): boolean {
    //     let users = this.getUsers();
    //     let findeUser = users.find(e => e.name == user.name);
    //     if (findeUser)
    //         Object.assign(findeUser, user);
    //     else //добавляем нового пользователя
    //         users.push(user);
    //     localStorage.setItem(this.usersKey, JSON.stringify(users));
    //     return true
    // }
}
