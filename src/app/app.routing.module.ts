import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainContentComponent } from './main-content/main-content.component';
import { TabDetailsComponent } from './main-content/content-tabs/tab-details/tab-details.component';


const appRoutes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'details/:id', component: TabDetailsComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}