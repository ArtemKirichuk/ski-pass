import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { i18n, parseImg } from 'src/app/types/helper';
import { SkiPassType } from 'src/app/types/types';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class SkiPassesFormComponent extends i18n implements OnInit {
    skiPssForm = new FormGroup({
        cardNumber: new FormControl(null, [Validators.required]),
        dateStart: new FormControl(null, [Validators.required]),
        dateEnd: new FormControl(null, [Validators.required]),
        cost: new FormControl(null, [Validators.required]),
        photo: new FormControl('')
    });
    srcPhoto:string|SafeUrl = 'assets/images/default-photo.svg';
    skiPass!: SkiPassType;

    constructor(private sanitizer:DomSanitizer){
        super();
    }
    ngOnInit(): void {
    }
    doneEditProfile() {

    }
    changeDate() {

    }
    compareCompleteDate = (d: Date | null): boolean => {
        const day = (d || new Date());
        return day !== null && day.getTime() >= new Date().setHours(0, 0, 0, 0);
    };
    //Сохранить изменения
    saveRow(): void {
        Object.assign(this.skiPass, this.skiPssForm.value);
    }
    loadPhoto(): void {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.jpg, .jpeg, .png';
        input.onchange = (event:Event) => {
            const file: File = (event.target as HTMLInputElement).files![0];
            parseImg(file, 'URL', (res: string, file: File) => {
        
                // this.imgSrc = res ;
        
                this.srcPhoto = this.sanitizer.bypassSecurityTrustUrl(res); 
                this.skiPssForm.value.photo = res;
            });
        };
        input.click();
    }

}
