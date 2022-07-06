export type KeyUserType = {
    name:string;
}
export type UserType = {
    name:string;
    surname:string;
    password:string;
    photo:string;
}
export type KeyVisitorType = {
    fio: string;
}
export type VisitorType ={
    fio: string;
    birthday: Date;
    skiPass:number;
    instructor:string;
    sport: string;
    photo:string;
}
export type KeyInstructorType={
    fio:string;
}
export type InstructorType ={
    fio:string;
    birthday: Date;
    sex:string;
    visiter:string;
    category: string;
    photo:string;
    startWork: Date;
}
export type KeySkiPassType = {
    cardNumber:number;
}
export type SkiPassType = {
    cardNumber: number;
    dateStart: Date;
    dateEnd: Date;
    visiter:string;
    cost: number;
    photo: string;
}
export type updateType<T,U> = {
    oldKey:T;
    newRow:U;
}
