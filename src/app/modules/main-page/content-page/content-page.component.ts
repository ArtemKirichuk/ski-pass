import { Component, OnInit } from '@angular/core';
import { i18nRU } from 'src/app/modules/shared/constants';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent  implements OnInit {
  i18nRU = i18nRU;
  constructor() { }

  ngOnInit(): void {
  }

}
