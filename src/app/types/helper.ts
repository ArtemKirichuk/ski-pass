export function parseImg (file: File, typeRead: string | null, callback: Function){
    
    const fr = new FileReader();
    fr.onload = function (e) {
        callback(e.target!.result, file);
    };
    switch (typeRead) {
    case 'URL':
        fr.readAsDataURL(file);
        break;
    case 'Buffer':
        fr.readAsArrayBuffer(file);
        break;
    default:
        fr.readAsBinaryString(file);
        break;
    }
}
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class CustomValidator{
    static dDateEnd:Date ;
    static dDateStart:Date ;

    static dateStart(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors  | null => {      
            CustomValidator.dDateStart = control.value;
            return  null;
        };
    }
    static dateEnd(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors  | null => {
      
            CustomValidator.dDateEnd = control.value;
            const bError = CustomValidator.dDateEnd && CustomValidator.dDateStart && CustomValidator.dDateEnd < CustomValidator.dDateStart;
            return bError ? {errorDate: {value: control.value}} : null;
        };
    }

}
export  class i18n{
    readonly ADD_NEW = 'Добавить новый';
    readonly SKIPASSES = 'Ски-пассы';
    readonly ASSIGN_VISITOR ='Назначить посетителя';
    readonly EDIT ='Назначить посетителя';
    readonly DELETE ='Удалить';
    readonly ADD ='Добавить';
    readonly SAVE ='Сохранить';
    readonly FORM_TITLE_SKIPASS ='Добавить новый ски-пасс';
    readonly FORM_CARD_NUMBER ='Номер';
    readonly FORM_DATE_START ='Начало действия';
    readonly FORM_DATE_END ='Коец действия';
    readonly FORM_COST ='Стоимость';
    // private constructor(){}
}