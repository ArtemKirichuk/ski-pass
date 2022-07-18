
import { Crud } from '../crud';


export class Instructor extends Crud {
    //Instructor
    db: Instructor[] = [];
    static instance: Instructor = new Instructor();
    private constructor() {
        super('instructor', ['fio']);
    }
}




