import { Component, Input } from '@angular/core';
import {InventoryService} from '../service/inventory.service';
import { ICompany } from '../interfaces/ICompany';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  companies: ICompany[];
  @Input() totalCount: string;
  inventoryList

  constructor(InventoryService: InventoryService) {
    this.companies = InventoryService.getCompanies();
    this.totalCount = '0';
    this.inventoryList = InventoryService.getCollection();
     
   }
  
   trackByCompanyFn(index, item){
     return index;
   }

}
