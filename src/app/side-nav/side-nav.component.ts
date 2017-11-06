import { Component } from '@angular/core';
import {InventoryService} from '../service/inventory.service';
import { ICompany } from '../interfaces/ICompany';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  companies: ICompany[];
  constructor(InventoryService: InventoryService) {
    this.companies = InventoryService.getCompanies();
   }
  
 

}
