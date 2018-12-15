import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../shared/models/book.model';
import { InventoryService } from '../../../service/inventory.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  bookTitle: string;
  books: Book;

  constructor(private route: ActivatedRoute, private inventoryservice: InventoryService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.bookTitle = params['title'];
      }
    )
  }

}
