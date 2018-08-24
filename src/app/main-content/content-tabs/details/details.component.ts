import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  bookTitle: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookTitle = this.route.snapshot.params.title;
    console.log(this.route.snapshot.params.title); 
  }

}
