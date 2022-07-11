import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


import { i18n } from 'src/app/types/helper';
import { SkiPassType } from 'src/app/types/types';


@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss']
})
export class DeleteFormComponent extends i18n implements OnInit  {
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: SkiPassType) { 
    super(); 
    
  }
  
  ngOnInit(): void {
  }


}
