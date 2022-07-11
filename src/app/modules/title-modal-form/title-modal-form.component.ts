import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-title-modal-form',
    templateUrl: './title-modal-form.component.html',
    styleUrls: ['./title-modal-form.component.scss']
})
export class TitleModalFormComponent {

  @Input() title  = 'Title';
  @Output() closeEvent = new EventEmitter();
  closeModal():void{
      this.closeEvent.emit(true);
  }
}
