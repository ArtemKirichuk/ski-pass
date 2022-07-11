import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VisitorType } from 'src/app/types/types';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

  @Input() person: VisitorType = {} as VisitorType;
  @Output() onDeleteVisitor = new EventEmitter<VisitorType>();

  APPOINT_COACH = 'Назначить тренера';
  EDIT = 'Редактировать';
  DELETE = 'Удалить';

  deleteVisitor() {
      this.onDeleteVisitor.emit(this.person);
  }
}
