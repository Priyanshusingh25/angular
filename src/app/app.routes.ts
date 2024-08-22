import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {
        path : 'container' ,
        component : ContainerComponent 
    } , 
    {
        path : 'nav' ,
        component : NavComponent
    } ,
    {
        path : '',
        component : FooterComponent ,
    },
    {
        path : 'header' ,
        component : HeaderComponent
    } ,
    {
        path: '',
         redirectTo: '/footer', 
         pathMatch: 'full',
        },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
