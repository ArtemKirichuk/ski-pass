import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PersanCardType } from 'src/app/types/types';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

    @Input() showMenu = true;
    @Input() data:PersanCardType ={} as PersanCardType;
    @Output() onDelete = new EventEmitter<void>();
    @Output() onEdit = new EventEmitter<void>();
    @Output() onShow = new EventEmitter<void>();
    width = '45px';
    height = '45px';
    delete(): void {
        this.onDelete.emit();
    }
    edit(): void {
        this.onEdit.emit();
    }
    show(): void {
        this.onShow.emit();
    }
}
