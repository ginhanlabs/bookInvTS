import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './main-content/content-tabs/details/details.component';
import { DashboardComponent } from './main-content/content-tabs/dashboard.component';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'details/:title', component: DetailsComponent}
    //TODO: figure out how to reload url with new params
   //  runGuardsAndResolvers : paramsOrQueryParamsChange
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            onSameUrlNavigation: 'reload'
          })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}