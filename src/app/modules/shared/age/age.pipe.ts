import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'age'
})
export class AgePipe implements PipeTransform {

    transform(dateBirthOut: Date): string {
        const dateBirth = new Date(dateBirthOut);
        const dateNow: Date = new Date();
        if (dateNow < dateBirth) return '';

        let age = dateNow.getFullYear() - dateBirth.getFullYear();

        if (dateNow.getMonth() < dateBirth.getMonth() || 
       (dateNow.getMonth() === dateBirth.getMonth() && dateNow.getDate() <= dateBirth.getDate())) {
            age = age - 1;
        }

        if (age === 0) return 'Менее года';
        if(age >= 11 && age <= 19) return age.toString() + ' лет';

        let ageMod = age;
        do {
            ageMod = ageMod % 10;
        } while(ageMod % 10 > 10);

        switch(true) {
        case ageMod === 0: return age.toString() + ' лет';
        case ageMod === 1: return age.toString() + ' год';
        case 2 <= ageMod && ageMod <= 4: return age.toString() + ' года';
        case 5 <= ageMod && ageMod <= 9: return age.toString() + ' лет';
        default: return '';
        }
    }

}
