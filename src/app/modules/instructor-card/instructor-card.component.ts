import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InstructorType } from 'src/app/types/types';

@Component({
    selector: 'app-instructor-card',
    templateUrl: './instructor-card.component.html',
    styleUrls: ['./instructor-card.component.scss']
})
export class InstructorCardComponent {

  @Input() instructor: InstructorType = { } as InstructorType;
  @Input() showMenu = true;
  @Output() onDeleteInstructor = new EventEmitter<InstructorType>();
  @Output() onEditInstuctor = new EventEmitter<InstructorType>();
  @Output() onShowInstructor = new EventEmitter<InstructorType>();

  APPOINT_COACH = 'Назначить поситителя';
  EDIT = 'Редактировать';
  DELETE = 'Удалить';
  EXPERIENCE = '. Опыт ';

  deleteInstructor(): void {
      this.onDeleteInstructor.emit(this.instructor);
  }

  editInstructor(): void {
      this.onEditInstuctor.emit(this.instructor);
  }

  showInstructor(): void {
      this.onShowInstructor.emit(this.instructor);
  }
}
