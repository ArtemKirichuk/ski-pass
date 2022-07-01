import { VisitorType } from "../../shared/interfaces";
import { crud } from "../crud";

export class Visiter extends crud {
    //VISITER
    private static  visiterKey = 'visiter';
    private static visiterKeys:string[]= ['fio' ]
    visiters: VisitorType[] = []
    static instance:Visiter = new Visiter()
    private constructor(){
        super(Visiter.visiterKey, Visiter.visiterKeys)
    }    
    //VISITER
    // getVisiter(): IVisitor[] {
    //     const visiters = <string>localStorage.getItem(this.visiterKey);
    //     this.visiters = visiters ? JSON.parse(visiters) : [];
    //     return this.visiters;
    // }
    // createVisiter(visiter: IVisitor): boolean {
    //     let isCreate = false;
    //     let visters = this.getVisiter();
    //     visters.push(visiter);
    //     localStorage.setItem(this.visiterKey, JSON.stringify(visters));
    //     return !isCreate
    // }
    // deleteVisiter(fio: string): boolean {
    //     let visters = this.getVisiter();
    //     let delVisiter = visters.find(e => e.fio == fio)
    //     if (!delVisiter)
    //         return false
    //     visters.splice(visters.indexOf(delVisiter), 1)
    //     localStorage.setItem(this.visiterKey, JSON.stringify(visters))
    //     return true
    // }
    // updateVisiter(visiter: IVisitor): boolean {
    //     let visiters = this.getVisiter();
    //     let editVisiter = visiters.find(e => e.fio == visiter.fio);
    //     if (!editVisiter) {
    //         return false;
    //     }
    //     visiters.splice(visiters.indexOf(editVisiter!), 1, visiter);
    //     localStorage.setItem(this.visiterKey, JSON.stringify(visiters));
    //     return true
    // }
}
