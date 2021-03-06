import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './main-content/content-tabs/details/details.component';
import { DashboardComponent } from './main-content/content-tabs/dashboard.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SearchComponent } from './search/search.component';
import { ResultTableComponent } from './add/result-table/result-table.component'


const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'details/:title', component: DetailsComponent},
    { path: 'add', component: AddComponent },
    { path: 'search', component: SearchComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            onSameUrlNavigation: 'reload'
          }),
          CommonModule,
          FormsModule,
          TypeaheadModule.forRoot(),
    ],
    exports: [RouterModule],
    declarations: [AddComponent, SearchComponent, ResultTableComponent]
})

export class AppRoutingModule{

}