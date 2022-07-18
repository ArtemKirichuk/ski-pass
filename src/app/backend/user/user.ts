import { Crud } from '../crud';

export class User extends Crud{
    private static usersKey = 'users';
    private static  usersKeys:string[] = ['name'];
    static instance:User = new User();
    private constructor(){
        super(User.usersKey,User.usersKeys);
    }

}
