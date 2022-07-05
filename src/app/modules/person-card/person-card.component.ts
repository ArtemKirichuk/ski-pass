import { Component, Input } from '@angular/core';
import { VisitorType } from 'src/app/types/types';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

  @Input() visitor: VisitorType = {
      fio: 'Зубенко Михаил Петрович',
      birthday: new Date(1970, 0, 1),
      photo: '../../../assets/images/user-default.jpg',
      instructor: '',
      skiPass: 0,
      sport: ''
  };

  APPOINT_COACH = 'Назначить тренера';
  EDIT = 'Редактировать';
  DELETE = 'Удалить';
}
