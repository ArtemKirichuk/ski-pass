import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { i18n, parseImg } from 'src/app/types/helper';
import { SkiPassType } from 'src/app/types/types';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class SkiPassesFormComponent extends i18n implements OnInit {
  skiPassForm: FormGroup;
  srcPhoto: string | SafeUrl = 'assets/images/default-photo.svg'

  isCreate: boolean;
  constructor(private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public skiPass: SkiPassType) {
    super()
    this.isCreate = skiPass ? false : true;
    // this.skiPass.photo = 'assets/images/default-photo.svg'
    this.skiPassForm = new FormGroup({
      cardNumber: new FormControl(this.skiPass?.cardNumber, [Validators.required]),
      dateStart: new FormControl(this.skiPass?.dateStart, [Validators.required]),
      dateEnd: new FormControl(this.skiPass?.dateEnd, [Validators.required]),
      cost: new FormControl(this.skiPass?.cost, [Validators.required]),
      photo: new FormControl(this.skiPass?.photo)
    });
  }
  ngOnInit(): void {

  }

  changeDate() {

  }
  compareCompleteDate = (d: Date | null): boolean => {
    const day = (d || new Date());
    return day !== null && day.getTime() >= new Date().setHours(0, 0, 0, 0);
  };
  //Сохранить изменения
  saveRow(): void {

    Object.assign(this.skiPass, this.skiPassForm.value);
  }
  loadPhoto(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.jpg, .jpeg, .png';
    input.onchange = (event: Event) => {
      let file: File = (event.target as HTMLInputElement).files![0]
      parseImg(file, 'URL', (res: string, file: File) => {

        // this.imgSrc = res ;

        this.srcPhoto = this.sanitizer.bypassSecurityTrustUrl(res);
        this.skiPassForm.value.photo = res;
      })
    };
    input.click();
  }

}
