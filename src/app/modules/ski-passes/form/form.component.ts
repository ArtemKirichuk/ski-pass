import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { map, Observable, startWith } from 'rxjs';
import { CustomValidator, i18n, parseImg } from 'src/app/types/helper';
import { KeySkiPassType, SkiPassType, updateType } from 'src/app/types/types';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class SkiPassesFormComponent extends i18n implements OnInit {
    skiPassForm: FormGroup;
    srcPhoto = 'assets/images/default-photo.svg';
    isCreate: boolean;
    get cardNumber() { return this.skiPassForm.get('cardNumber'); }
    get dateStart() { return this.skiPassForm.get('dateStart'); }
    get dateEnd() { return this.skiPassForm.get('dateEnd'); }
    get photo() { return this.skiPassForm.get('photo'); }
    get visiter() { return this.skiPassForm.get('visiter'); }
    visiters: string[] = [];
    filteredOptions!: Observable<string[]>;
    constructor(private sanitizer: DomSanitizer,
        @Inject(MAT_DIALOG_DATA) public skiPass: SkiPassType) {
        super();
        this.isCreate = false;
        if (!skiPass) {
            this.isCreate = true;
            this.skiPass = {} as SkiPassType;
        }
        // this.skiPass.photo = this.skiPass.photo ? this.skiPass.photo : this.srcPhoto;
        this.srcPhoto = this.skiPass.photo ? this.skiPass.photo : this.srcPhoto;

        this.skiPassForm = new FormGroup({
            photo: new FormControl(this.skiPass.photo),
            cardNumber: new FormControl(this.skiPass?.cardNumber, [
                Validators.required,
                CustomValidator.cardNumber()
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
            visiter: new FormControl(this.skiPass?.visiter),
        });

    }
    ngOnInit(): void {
        if (this.visiter)
            this.filteredOptions = this.visiter.valueChanges.pipe(
                startWith(''),
                map(value => this.filterVisiter(value || '')),
            );
    }
    private filterVisiter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.visiters.filter(e => e.toLowerCase().includes(filterValue));
    }
    changeDate(): void {
        this.skiPassForm.controls['dateStart'].updateValueAndValidity();
        this.skiPassForm.controls['dateEnd'].updateValueAndValidity();
    }
    compareCompleteDate = (d: moment.Moment | null): boolean => {
        const day:Date = (d?.toDate() || new Date());
        return day !== null && day.getTime() >= new Date().setHours(0, 0, 0, 0);
    };
    updateData: updateType<KeySkiPassType, SkiPassType> = {} as updateType<KeySkiPassType, SkiPassType>;

    //Сохранить изменения
    saveRow(): void {
        Object.assign(this.updateData, { oldKey: { cardNumber: this.skiPass.cardNumber }, newRow: this.skiPassForm.value });
    }
    loadPhoto(): void {
        const input = document.createElement('input');
        // const input = document.getElementById('file') as HTMLInputElement;
        input.type = 'file';
        input.accept = '.jpg, .jpeg, .png';

        input.onchange = (event: Event) => {
            const files = (event.target as HTMLInputElement).files;
            let file: File;
            if (files && files.length) {
                file = files[0];
                parseImg(file, 'URL', (res: string | ArrayBuffer | null) => {
                    this.srcPhoto = res as string;
                    this.skiPassForm.controls['photo'].setValue(res);
                });
            }
        };
        input.click();
    }

}
