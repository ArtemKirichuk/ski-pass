import { Component, Input, OnInit } from '@angular/core';
import {  attr, i18nRU, srcAsset } from 'src/app/modules/shared/helper';

@Component({
  selector: 'app-container-mini',
  templateUrl: './container-mini.component.html',
  styleUrls: ['./container-mini.component.scss']
})
export class ContainerMiniComponent implements OnInit {
  attr = attr
  
  @Input() title: string = attr.title;
  @Input() route: string = '/clients';
  
  i18nRU = i18nRU
  srcAsset = srcAsset
  show = true;
  minimizeURL = srcAsset.arrowUpURL;
  constructor() {  }

  ngOnInit(): void { }
  minimize(): void {
    this.show = !this.show;
    this.minimizeURL = this.show ? srcAsset.arrowUpURL : srcAsset.arrowDownURL
}
}
