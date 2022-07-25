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
