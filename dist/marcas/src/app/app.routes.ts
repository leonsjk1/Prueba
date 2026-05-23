import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './datos/datos';

export const routes: Routes = [
  { path: '', redirectTo: '/tablaDatos', pathMatch: 'full'},
  { path: 'tablaDatos', component: DatosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class appRoutingModule { }
