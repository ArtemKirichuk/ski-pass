import { Component, EventEmitter, Input, Output } from '@angular/core';
import { parseImg } from 'src/app/modules/shared/helper';
import { attribute, i18nRU } from 'src/app/modules/shared/constants';

@Component({
    selector: 'app-photo-form',
    templateUrl: './photo-form.component.html',
    styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent {

    @Input() img = '';
    @Input() width = '173px';
    @Input() height = '173px';
    @Input() select:boolean = true;
    @Output() imgLink = new EventEmitter();
    i18nRU = i18nRU
    clickEditPhoto(): void {
        if(!this.select) return
        const input = document.createElement(attribute.INPUT);
        input.type = attribute.FILE;
        input.accept = attribute.ACCESS_FILE_EXTENSION;
        input.onchange = e => {
            this.getImageList(e);
        };
        input.click();
    }

    getImageList(event: Event): void {
        if (event) {
            const target = event.target as HTMLInputElement;
            const file: File = (target.files as FileList)[0];
            if (!file || file.size === 0) {
                alert(i18nRU.SELECT_IMG);
                return;
            }
            const mimeType = file.type;

            if (mimeType.match(/image\/*/) == null) {
                alert(i18nRU.SELECT_ONLY_IMG);
                return;
            }

            parseImg(file, 'URL', (res: string | ArrayBuffer | null) => {
                res = (res as string);
                if (res.split(' ').length != 0) {
                    res = res.split(' ')[0];
                }
                this.imgLink.emit(res);
            });
        }

    }

}
