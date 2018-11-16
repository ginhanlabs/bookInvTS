import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './main-content/content-tabs/details/details.component';
import { DashboardComponent } from './main-content/content-tabs/dashboard.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
/* import { TitleTypeAheadComponent } from './shared/title-type-ahead/title-type-ahead.component'; */


const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'details/:title', component: DetailsComponent},
    { path: 'add', component: AddComponent }
   //  runGuardsAndResolvers : paramsOrQueryParamsChange
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            onSameUrlNavigation: 'reload'
          }),
          CommonModule,
          FormsModule
    ],
    exports: [RouterModule],
    declarations: [AddComponent]
})

export class AppRoutingModule{

}