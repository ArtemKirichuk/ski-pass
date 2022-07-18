
import { VisitorType } from 'src/app/types/types';
import { Crud } from '../crud';

export class Visiter extends Crud {
    //VISITER
    private static  visiterKey = 'visiter';
    private static visiterKeys:string[]= ['fio' ];
    visiters: VisitorType[] = [];
    static instance:Visiter = new Visiter();
    private constructor(){
        super(Visiter.visiterKey, Visiter.visiterKeys);
    }    
}
