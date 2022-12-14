import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text = 'TEXT';
  @Input() disabled = false;
  // values: icon, noIcon
  @Input() mode = 'noIcon';

  

}
