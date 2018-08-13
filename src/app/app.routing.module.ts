import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './main-content/content-tabs/details/details.component';
import { DashboardComponent } from './main-content/content-tabs/dashboard.component';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'details/:id', component: DetailsComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}