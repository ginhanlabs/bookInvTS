import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {InventoryService} from '../../service/inventory.service';
// import { IInventoryList } from '../../interfaces/IInventoryList';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.css']
})
export class SideNavItemComponent {
 @Input() publisherChild: string;

  inventoryList;

  constructor(InventoryService: InventoryService) {
    this.inventoryList = InventoryService.getTitles();
   }

}
