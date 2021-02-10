import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'detail',component: DetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ],],
  exports: [RouterModule]
})
export class AppRoutingModule { }
