import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../shared/models/book.model'
import { InventoryService } from '../../service/inventory.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit, OnDestroy {

  newBooks = new Array<Book>();
  bookSubscription = new Subscription();

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.bookSubscription = this.inventoryService.bookAdded
      .subscribe(
        ( books : Book[]) =>{
          this.newBooks = books;
        })
  }

  ngOnDestroy(){
    this.bookSubscription.unsubscribe();
  }



}
