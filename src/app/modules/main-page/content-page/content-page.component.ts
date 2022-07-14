import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/app/modules/shared/helper';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent extends i18n implements OnInit {

  constructor() { super()}

  ngOnInit(): void {
  }

}
