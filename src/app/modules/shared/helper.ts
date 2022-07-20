export function parseImg(file: File, typeRead: string | null, callback: (res: string | ArrayBuffer | null, file: File) => void) {

    const fr = new FileReader();
    fr.onload = function (e) {
        callback(e.target ? e.target.result : '', file);
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
export enum srcAsset {
    DEFAULT_IMG = 'assets/images/default-photo.svg',
    arrowUpURL = 'assets/images/arrow-up-icon.svg',
    arrowDownURL = 'assets/images/arrow-down-icon.svg',
    nextPageIcon = 'assets/images/next-page-icon.svg',
    editIcon = 'assets/images/edit-icon.svg',
    deleteIcon = 'assets/images/delete-icon.svg',
}
export enum attr{
    TEXT_TYPE = 'text',
    INPUT = 'input',
    FILE= 'file',
    ACCESS_FILE_EXTENSION = '.jpg, .jpeg, .png',
}
export enum i18nRU {
    TITLE_VISITER = 'Карточка посетителя',
    APPOINTED_INSTRUCTOR = 'Назначенный тренер',
    SELECT_IMG= 'Вам нужно выбрать изображение',
    SELECT_ONLY_IMG = 'Для выбора доступны только изображения',
    ADD_NEW = 'Добавить новый',
    ADD_NEW1 = 'Добавить нового',
    FIO = 'ФИО',
    SKIPASSES = 'Ски-пассы',
    INSTRUCTOR = 'Назначить тренера',
    INSTRUCTORS = 'Инструкторы',
    VISITERS = 'Посетители',
    ASSIGN_VISITOR = 'Назначить посетителя',
    EDIT = 'Редактировать',
    DELETE = 'Удалить',
    ADD = 'Добавить',
    PASS = 'Пропуск',
    FORM_TITLE_SKIPASS = 'Добавить новый ски-пасс',
    FORM_CARD_NUMBER = 'Номер',
    SAVE = 'Сохранить',
    OK = 'OK',
    FORM_DELETE_TITLE_SKIPASS = 'Удаление ски-пасса',
    FORM_DATE_START = 'Начало действия',
    FORM_DATE_END = 'Коец действия',
    FORM_COST = 'Стоимость',
    VISITER = 'Посетитель',
    DELETE_TEXT = 'Вы уверены, что хотите удалить карточку этого ски-пасса?',
    ACTION_TIME = 'Время действия',
    COST = 'Цена',
    ASSIGNE_VISITER = 'Назначенный посетитель',
    CARD_SKIPASS = 'Карточка ски-пасса',
    ALL = 'Все',
    BIRTHDAY = 'День рождения',
    NUMBER_SKIPASS = 'Номер ски-пасса',
    NUMBER_TYPE = 'number',
    
    SPORT = 'Вид спорта',
    BUTTON_ADD = 'Добавить',
    TITLE_ADD_NEW_VISITER = 'Добавить нового посетителя',
    SEARCH = 'Поиск',
    EXIT = 'Выход',
    SKI_RESORT = 'Горнолыжный курорт',
}
export enum i18nErrors {
    ERROR_ADD_USER = 'Ошибка добавления пользователя',
    ERROR_DATE_END_LT_DATE_START = 'Дата завершения меньше даты начала.',
    ERROR_CARD_NUMBER = 'Неверный номер карты.',
    ERROR_EMPTY_NAME = 'Необходимо заполнить ФИО',
    ERROR_EMPTY_NUMBER = 'Необходимо заполнить номер ски-пасса',
    ERROR_SKI_PASS_LEN = 'Ски-пасс должен быть 16-символьным',
    ERROR_SKI_PASS_NOT_FOUND = 'Такого ски-пасса не существует',
    ERROR_EMPTY_SPORT = 'Необходимо заполнить вид спорта',
    ERROR_EMPTY_BIRTHDAY = 'Необходимо заполнить день рождения',
}
