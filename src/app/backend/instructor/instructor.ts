
import { crud } from '../crud';


export class Instructor extends crud {
    //Instructor
    db: Instructor[] = [];
    static instance: Instructor = new Instructor();
    private constructor() {
        super('instructor', ['fio']);
    }
}




