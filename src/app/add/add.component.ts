import { Component,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild("addForm") addForm : NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    console.log("dfdd");
  }
}
