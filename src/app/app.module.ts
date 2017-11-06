import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { ContentTabsComponent } from './main-content/content-tabs/content-tabs.component';
import { SideNavItemComponent } from './side-nav/side-nav-item/side-nav-item.component';

import {InventoryService} from './service/inventory.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    MainContentComponent,
    FooterComponent,
    ContentTabsComponent,
    SideNavItemComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
