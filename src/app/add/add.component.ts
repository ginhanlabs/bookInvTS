import { Component,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TitleService } from '../service/title.service';
import { PublisherService } from '../service/publisher.service';
import { ConditionService } from '../service/condition.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild("addForm") addForm : NgForm;
  selectedTitle:string;
  selectedPublisher: string;
  selectedCondition: string;
  publisherList: string[];
  conditionList: string[];
  bookList: string[];
  constructor(private titleService: TitleService, private publisherService: PublisherService, private conditionService: ConditionService) { }

  ngOnInit() {
    this.bookList = this.titleService.getTitles();
    this.publisherList = this.publisherService.getPublisherList();
    this.conditionList = this.conditionService.getConditions();

  }

  onSubmit(f:NgForm){
    console.log("dfdd");
  }
}
