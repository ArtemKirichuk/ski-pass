
import { VisitorType } from 'src/app/types/types';
import { crud } from '../crud';

export class Visiter extends crud {
    //VISITER
    private static  visiterKey = 'visiter';
    private static visiterKeys:string[]= ['fio' ];
    visiters: VisitorType[] = [];
    static instance:Visiter = new Visiter();
    private constructor(){
        super(Visiter.visiterKey, Visiter.visiterKeys);
    }    
}
