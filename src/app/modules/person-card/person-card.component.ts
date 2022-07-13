import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VisitorType } from 'src/app/types/types';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

  @Input() person: VisitorType = {} as VisitorType;
  @Input() showMenu = true;
  @Output() onDeleteVisitor = new EventEmitter<VisitorType>();
  @Output() onEditVisitor = new EventEmitter<VisitorType>();
  @Output() onShowVisitor = new EventEmitter<VisitorType>();

  APPOINT_COACH = 'Назначить тренера';
  EDIT = 'Редактировать';
  DELETE = 'Удалить';

  deleteVisitor(): void {
      this.onDeleteVisitor.emit(this.person);
  }

  editVisitor(): void {
      this.onEditVisitor.emit(this.person);
  }

  showVisitor(): void {
      this.onShowVisitor.emit(this.person);
  }
}
