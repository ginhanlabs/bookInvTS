import { Component, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/iBook'
import { InventoryService } from '../../service/inventory.service';
@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  newBooks: IBook[] = new Array<IBook>();
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService.bookAdded
      .subscribe(
        ( book : IBook) =>{
          this.newBooks.push(book);
        })
  }




}
