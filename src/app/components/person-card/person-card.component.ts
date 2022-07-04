import { Component, Input, OnInit } from '@angular/core';
import { VisitorType } from 'src/app/types/types';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() visitor: VisitorType = {
    fio: "Зубенко Михаил Петрович",
    birthday: new Date(1970, 0, 1),
    photo: "../../../assets/images/user-default.jpg",
    instructor: "",
    skiPass: 0,
    sport: ""
  };

  APPOINT_COACH: string = "Назначить тренера";
  EDIT: string = "Редактировать";
  DELETE: string = "Удалить";

  constructor() { }

  ngOnInit(): void {
  }
}
