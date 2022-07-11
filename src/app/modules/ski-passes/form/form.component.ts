import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CustomValidator, i18n, parseImg } from 'src/app/types/helper';
import { SkiPassType } from 'src/app/types/types';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class SkiPassesFormComponent extends i18n implements OnInit {
    skiPassForm: FormGroup;
    srcPhoto: string = 'assets/images/default-photo.svg';

    isCreate: boolean;
    get dateStart() { return this.skiPassForm.get('dateStart'); }
    get dateEnd() { return this.skiPassForm.get('dateEnd')!; }
    get photo() { return this.skiPassForm.get('photo')!; }
    constructor(private sanitizer: DomSanitizer,
        @Inject(MAT_DIALOG_DATA) public skiPass: SkiPassType) {
        super();
        this.isCreate = skiPass ? false : true;

        this.skiPassForm = new FormGroup({
            photo: new FormControl(this.skiPass?.photo),
            cardNumber: new FormControl(this.skiPass?.cardNumber, [
                Validators.required
            ]),
            dateStart: new FormControl(this.skiPass?.dateStart, [
                Validators.required,
                CustomValidator.dateStart()
            ]),
            dateEnd: new FormControl(this.skiPass?.dateEnd, [
                Validators.required,
                CustomValidator.dateEnd()

            ]),
            cost: new FormControl(this.skiPass?.cost, [Validators.required]),
        });

    }
    ngOnInit(): void {
    }

    changeDate(): void {
        this.skiPassForm.controls['dateStart'].updateValueAndValidity();
        this.skiPassForm.controls['dateEnd'].updateValueAndValidity();
    }
    compareCompleteDate = (d: Date | null): boolean => {
        const day = (d || new Date());
        return day !== null && day.getTime() >= new Date().setHours(0, 0, 0, 0);
    };
    //Сохранить изменения
    saveRow(): void {
        if (!this.photo.value)
            this.skiPassForm.value.photo = '';
        else
            this.skiPassForm.value.photo = this.srcPhoto;
    }
    loadPhoto(): void {

        const input = document.getElementById('file') as HTMLInputElement;
        // input.type = 'file';
        input.accept = '.jpg, .jpeg, .png';
        input.onchange = (event: Event) => {
            const file: File = (event.target as HTMLInputElement).files![0];
            parseImg(file, 'URL', (res: string, file: File) => {
                // this.srcPhoto = this.sanitizer.bypassSecurityTrustUrl(res);
                this.srcPhoto = res;
            });
        };
        input.click();
    }

}
