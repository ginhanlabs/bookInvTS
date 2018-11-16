import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './main-content/content-tabs/dashboard.component';
import { SideNavItemComponent } from './side-nav/side-nav-item/side-nav-item.component';

import {InventoryService} from './service/inventory.service';
import { ValueByPublisherComponent } from './main-content/content-tabs/value-by-publisher/value-by-publisher.component';
import { MostValuableIssuesComponent } from './main-content/content-tabs/most-valuable-issues/most-valuable-issues.component';
import { ValueOfCollectionComponent } from './main-content/content-tabs/value-of-collection/value-of-collection.component';
import { DetailsComponent } from './main-content/content-tabs/details/details.component';
import { ChartComponent } from './main-content/content-tabs/chart/chart.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    FooterComponent,
    DashboardComponent,
    SideNavItemComponent,
    ValueByPublisherComponent,
    MostValuableIssuesComponent,
    ValueOfCollectionComponent,
    DetailsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot()
   
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
