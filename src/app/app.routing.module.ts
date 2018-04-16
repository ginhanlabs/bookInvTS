import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainContentComponent } from './main-content/main-content.component';


const appRoutes: Routes = [
    { path: '', component: MainContentComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}