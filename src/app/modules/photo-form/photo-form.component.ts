import { Component, EventEmitter, Input, Output } from '@angular/core';
import { parseImg } from 'src/app/types/helper';

@Component({
    selector: 'app-photo-form',
    templateUrl: './photo-form.component.html',
    styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent {
    IMG_NOT_FOUND  = 'Изображение не найдено';
  @Input() img = '';
  @Output() imgLink = new EventEmitter();
  
  clickEditPhoto() : void{
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.jpg, .jpeg, .png';
      input.onchange = e => { 

          this.getImageList(e); 
      };
      input.click();
  }

  getImageList(event : Event) : void{
      if(event){
          const target= event.target as HTMLInputElement;
          const file: File = (target.files as FileList)[0];
          if(!file || file.size === 0) {
              alert('Вам нужно выбрать изображение');
              return;
          }
          
          const mimeType = file.type;
          
          if (mimeType.match(/image\/*/) == null) {
              alert('Для выбора доступны только изображения');
              return;
          }
          
          
          parseImg(file, 'URL', (res : string | ArrayBuffer | null) => {
              res = (res as string);
              if(res.split(' ').length != 0){
                  res = res.split(' ')[0];
              }
              
              //this.editProfileGroup.patchValue({url:res.toString()});
              this.imgLink.emit(res);
              // const user = this.user$.value;
              // user.photo = res;
              // this.user$.next(user);
          });
      }
    
  }

}
