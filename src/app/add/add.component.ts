import { Component,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TitleService } from '../service/title.service';
import { PublisherService } from '../service/publisher.service';
import { Book } from '../shared/models/book.model';
import { InventoryService } from '../service/inventory.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild("addForm") addForm : NgForm;

  publisherList: string[];
  conditionList: string[];
  titleList: string[];

  condition="Mint";
  qty = 1;
  
  constructor(private titleService: TitleService, private publisherService: PublisherService, private inventoryService: InventoryService) { 
  }

  ngOnInit() {
    this.titleList = this.titleService.getTitles();
    this.publisherList = this.publisherService.getPublisherList();
    this.conditionList = this.inventoryService.getConditions();
  }

  onSubmit(f:NgForm){
    console.log(f);
    this.inventoryService.addBook(f.value);
    this.addForm.resetForm();
    this.setformDefaults();
  }

  setformDefaults(){
    this.addForm.form.patchValue(
      {
        qty: 1,
        condition: 'Fine'
      }
    )
  }
}
