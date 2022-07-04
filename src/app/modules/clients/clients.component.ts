import { Component, OnInit } from '@angular/core';
import { VisitorType } from 'src/app/types/types';


@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{

    CLIENTS: string = "Посетители";
    ADD: string = "Добавить нового";

    itemsOnPage: number = 26;
    currentPage: number = 1;
    pagesCount: number = 1;

    showedVisitors: VisitorType[] = [];
    allVisitors: VisitorType[] = [];

    constructor() {
        for(let i = 0; i < 100; i++) {
            if (i % 2 === 0) {
              const visitor: VisitorType = {
                fio: `Димон Заминированный Тапок ${i}`,
                birthday: new Date(1970, 0, 1),
                photo: "../../../assets/images/user-default.jpg",
                instructor: "",
                skiPass: 0,
                sport: ""
              }
              this.allVisitors.push(visitor);
              
            }
            else {
              const visitor: VisitorType = {
                fio: `Наталья Морская Пехота ${i}`,
                birthday: new Date(1975, 0, 1),
                photo: "../../../assets/images/user-default.jpg",
                instructor: "",
                skiPass: 0,
                sport: ""
              }
              this.allVisitors.push(visitor);
            }
          }
    }

    ngOnInit() {
        this.pagesCount = Math.ceil(this.allVisitors.length / this.itemsOnPage);
        this.showedVisitors = this.allVisitors.slice(0, this.itemsOnPage);
    }

    setPage(page: number) {

        switch(true) {
            case page < 1:
                this.currentPage = 1;
                break;
            case page > this.pagesCount:
                this.currentPage = this.pagesCount;
                break;
            default:
                this.currentPage = page;
        }
        const firstIndex = (this.currentPage-1)*this.itemsOnPage;
        const lastIndex = this.currentPage*this.itemsOnPage;
        this.showedVisitors = this.allVisitors.slice(firstIndex, lastIndex);
    }
    
    addClient() {
        
    }
}
