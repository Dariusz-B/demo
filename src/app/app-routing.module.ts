import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MainPageComponent,
    },
    {
      path: 'none',
      component: ErrorPageComponent,
  },
    {
        path: '**',
        component: ErrorPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
