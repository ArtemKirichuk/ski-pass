import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CustomValidator, parseImg } from 'src/app/modules/shared/helper';
import { attribute, i18nErrors, i18nRU, srcAsset } from 'src/app/modules/shared/constants';
import { VisitorService } from 'src/app/services/visitor.service';
import { KeySkiPassType, PersonCardType, SkiPassType, updateType, VisitorType } from 'src/app/types/types';
import { AgePipe } from '../../shared/age/age.pipe';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkiPassesFormComponent {
    skiPassForm: FormGroup;
    srcPhoto = srcAsset.DEFAULT_IMG as string;
    isCreate: boolean;
    i18nRU = i18nRU;
    i18nErrors = i18nErrors;
    attribute = attribute;
    validate = new BehaviorSubject<boolean>(false);
    photoStream = new BehaviorSubject<string>(srcAsset.DEFAULT_IMG);
    updateData: updateType<KeySkiPassType, SkiPassType> = {} as updateType<KeySkiPassType, SkiPassType>;
    get cardNumber() { return this.skiPassForm.get('cardNumber'); }
    get dateStart() { return this.skiPassForm.get('dateStart'); }
    get dateEnd() { return this.skiPassForm.get('dateEnd'); }
    get photo() { return this.skiPassForm.get('photo'); }
    get visiter() { return this.skiPassForm.get('visiter'); }
    get cost() { return this.skiPassForm.get('cost'); }
    visitersData: Observable<PersonCardType[]>;
    filteredOptions!: Observable<VisitorType[]>;
    constructor(
        @Inject(MAT_DIALOG_DATA) public skiPass: SkiPassType,
        private visiterService: VisitorService,
        private dialogRef: MatDialogRef<SkiPassesFormComponent>,
    ) {
        this.visitersData = this.visiterService.getVisitors()
            .pipe(
                map((visiters) => {
                    return this.getPersonData(visiters)
                })
            )
        this.isCreate = false;
        if (!skiPass) {
            this.isCreate = true;
            this.skiPass = {} as SkiPassType;
        }
        // this.srcPhoto = this.skiPass.photo ? this.skiPass.photo : this.srcPhoto;
        this.srcPhoto = this.photoStream.value;
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
        this.validate.subscribe(valid => {

            if (valid && this.skiPassForm.valid) {
                if (this.isCreate) {
                    this.dialogRef.close(this.skiPassForm.value);

                } else {
                    Object.assign(this.updateData, { oldKey: { cardNumber: this.skiPass.cardNumber }, newRow: this.skiPassForm.value });
                    this.dialogRef.close(this.updateData);
                }
            }
        })
    }
    getPersonData(visiters: VisitorType[]): PersonCardType[] {
        return visiters.map(visiter => {
            return {
                header: visiter.fio,
                title: AgePipe.prototype.transform(visiter.birthday),
                img: visiter.photo
            }
        })
    }

    getCardData(visiter: VisitorType): PersonCardType {
        return {
            header: visiter.fio,
            title: AgePipe.prototype.transform(visiter.birthday),
            img: visiter.photo
        }
    }
    // changeDate(): void {
    //     this.skiPassForm.controls['dateStart'].updateValueAndValidity();
    //     this.skiPassForm.controls['dateEnd'].updateValueAndValidity();
    // }
    compareCompleteDate = (d: moment.Moment | null): boolean => {
        const day: Date = (d?.toDate() || new Date());
        return day !== null && day.getTime() >= new Date().setHours(0, 0, 0, 0);
    };
    addRow(): void {
        this.validate.next(true);
    }
    //Сохранить изменения
    saveRow(): void {
        this.validate.next(true);
    }
    loadPhoto(): void {
        const input = document.createElement('input');
        input.type = attribute.file;
        input.accept = attribute.ACCESS_FILE_EXTENSION;

        input.onchange = (event: Event) => {
            const files = (event.target as HTMLInputElement).files;
            let file: File;
            if (files && files.length) {
                file = files[0];
                parseImg(file, 'URL', (res: string | ArrayBuffer | null) => {
                    this.srcPhoto = res as string;
                    this.photoStream.next(res as string)
                    this.skiPassForm.controls['photo'].setValue(res);
                });
            }
        };
        input.click();
    }
}
