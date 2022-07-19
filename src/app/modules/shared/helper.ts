export function parseImg(file: File, typeRead: string | null, callback: ( res: string | ArrayBuffer | null,file:File)=>void ) {

    const fr = new FileReader();
    fr.onload = function (e) {
        callback(e.target ? e.target.result:'', file);
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
    return;
}
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class CustomValidator {
    static dDateEnd: Date;
    static dDateStart: Date;

    static dateStart(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            CustomValidator.dDateStart = control.value;
            return null;
        };
    }
    static dateEnd(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {

            CustomValidator.dDateEnd = control.value;
            const error = CustomValidator.dDateEnd && CustomValidator.dDateStart && CustomValidator.dDateEnd < CustomValidator.dDateStart;
            return error ? { errorDate: { value: control.value } } : null;
        };

    }
    static cardNumber() {
        return (control: AbstractControl): ValidationErrors | null => {

            const error = String(control.value).length !== 16;

            return error ? { errorCard: { value: control.value } } : null;
        };
    }

}
export class i18n {
    readonly ADD_NEW = 'Добавить новый';
    readonly SKIPASSES = 'Ски-пассы';
    readonly ASSIGN_VISITOR = 'Назначить посетителя';
    readonly EDIT = 'Редактировать';
    readonly DELETE = 'Удалить';
    readonly ADD = 'Добавить';
    readonly SAVE = 'Сохранить';
    readonly OK = 'OK';
    readonly FORM_TITLE_SKIPASS = 'Добавить новый ски-пасс';
    readonly FORM_DELETE_TITLE_SKIPASS = 'Удаление ски-пасса';
    readonly FORM_CARD_NUMBER = 'Номер';
    readonly FORM_DATE_START = 'Начало действия';
    readonly FORM_DATE_END = 'Коец действия';
    readonly FORM_COST = 'Стоимость';
    readonly PASS = 'Пропуск';
    readonly VISITER = 'Посетитель';
    readonly DELETE_TEXT = 'Вы уверены, что хотите удалить карточку этого ски-пасса?';
    readonly ACTION_TIME = 'Время действия';
    readonly COST = 'Цена';
    readonly ASSIGNE_VISITER = 'Назначенный посетитель';
    readonly CARD_SKIPASS = 'Карточка ски-пасса';
    readonly ALL = 'Все';
    readonly INSTRUCTORS = 'Инструкторы';
    readonly VISITERS = 'Посетители';
    readonly ERROR_DATE_END_LT_DATE_START = 'Дата завершения меньше даты начала.';
    readonly ERROR_CARD_NUMBER = 'Неверный номер карты.';
    readonly NAME = 'ФИО';
    readonly ERROR_EMPTY_NAME = 'Необходимо заполнить ФИО';
    readonly ERROR_EMPTY_NUMBER = 'Необходимо заполнить номер ски-пасса';
    readonly ERROR_SKI_PASS_LEN = 'Ски-пасс должен быть 16-символьным'; 
    readonly ERROR_SKI_PASS_NOT_FOUND = 'Такого ски-пасса не существует'; 
    readonly ERROR_EMPTY_SPORT = 'Необходимо заполнить вид спорта';
    readonly ERROR_EMPTY_BIRTHDAY = 'Необходимо заполнить день рождения';
    readonly BIRTHDAY = 'День рождения';
    readonly NUMBER_SKIPASS = 'Номер ски-пасса';
    readonly NUMBER_TYPE = 'number';
    readonly TEXT_TYPE = 'text';
    readonly INSTRUCTOR = 'Назначить тренера';
    readonly SPORT = 'Вид спорта';
    readonly BUTTON_ADD = 'Добавить';
    readonly TITLE_ADD_NEW_VISITER = 'Добавить нового посетителя';
    readonly DEFAULT_IMG = 'assets/images/default-photo.svg';
    // private constructor(){}
}