import { UserType } from "src/app/shared/interfaces";
import { crud } from "../crud";

export class User extends crud{
    private static usersKey = 'users';
    private static  usersKeys:string[] = ['name'];
    static instance:User = new User()
    private constructor(){
        super(User.usersKey,User.usersKeys)
    }

}
