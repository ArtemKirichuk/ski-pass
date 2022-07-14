import { Component, Input, OnInit } from '@angular/core';
import { i18n } from 'src/app/types/helper';

@Component({
  selector: 'app-container-mini',
  templateUrl: './container-mini.component.html',
  styleUrls: ['./container-mini.component.scss']
})
export class ContainerMiniComponent extends i18n implements OnInit {
  @Input() title: string = 'title';
  @Input() route: string = '/clients';
  arrowUpURL = 'assets/images/arrow-up-icon.svg';
  arrowDownURL = 'assets/images/arrow-down-icon.svg';
  show = true;
  minimizeURL = this.arrowUpURL;
  constructor() { super() }

  ngOnInit(): void { }
  minimize(): void {
    this.show = !this.show;
    this.minimizeURL = this.show ? this.arrowUpURL : this.arrowDownURL
}
}
