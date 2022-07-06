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
export  class i18n{
    readonly ADD_NEW = 'Добавить новый';
    readonly SKIPASSES = 'Ски-пассы';
    readonly ASSIGN_VISITOR ='Назначить посетителя';
    readonly EDIT ='Назначить посетителя';
    readonly DELETE ='Удалить';
    readonly ADD ='Добавить';
    readonly FORM_TITLE_SKIPASS ='Добавить новый ски-пасс';
    readonly FORM_CARD_NUMBER ='Начало действия';
    readonly FORM_DATE_START ='Начало действия';
    readonly FORM_DATE_END ='Коец действия';
    readonly FORM_COST ='Стоимость';
    // private constructor(){}
}