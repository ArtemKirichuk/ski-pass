

import { crud } from "../crud";

export class SkiPass extends crud{
    private static nameDB:string = 'skipass'
    private static keys:string[] = ['cardNumber']
    static instance = new SkiPass();
    private constructor(){
        super(SkiPass.nameDB,SkiPass.keys)
    }
}
