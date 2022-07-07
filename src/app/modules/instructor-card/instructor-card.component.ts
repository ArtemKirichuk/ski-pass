import { Component, Input } from '@angular/core';
import { InstructorType } from 'src/app/types/types';

@Component({
    selector: 'app-instructor-card',
    templateUrl: './instructor-card.component.html',
    styleUrls: ['./instructor-card.component.scss']
})
export class InstructorCardComponent {

  @Input() instructor: InstructorType = {
      fio: 'Зубенко Михаил Петрович',
      birthday: new Date(1970, 0, 1),
      photo: '../../../assets/images/user-default.jpg',
      category: 'Лыжи',
      sex: 'Мужчина',
      visiter: '',
      startWork: new Date(2021, 0, 1)
  };
  @Input() showMenu = true;
  constructor(){
      console.log('pic', typeof this.instructor.photo);
  }

  APPOINT_COACH = 'Назначить поситителя';
  EDIT = 'Редактировать';
  DELETE = 'Удалить';
}
