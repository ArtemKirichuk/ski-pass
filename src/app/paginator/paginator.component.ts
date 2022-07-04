import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent<T> implements OnInit {

  @Input()itemsOnPage = 26;
  @Input()allItems: Array<T> = [];

  @Output() onChangePage = new EventEmitter<T[]>();

  currentPage = 1;
  pagesCount = 1;
  showedItems:  Array<T> = [];
  
  ngOnInit(): void {
      this.pagesCount = Math.ceil(this.allItems.length / this.itemsOnPage);
      this.showedItems = this.allItems.slice(0, this.itemsOnPage);

      this.onChangePage.emit(this.showedItems);
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
      this.showedItems = this.allItems.slice(firstIndex, lastIndex);

      this.onChangePage.emit(this.showedItems);
  }

}
