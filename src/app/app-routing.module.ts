import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: "address",
    pathMatch: "full"
  },
  {
    path: 'address',
    component: AddressComponent,
    children: [
      {
        path: '',
        component: AddressComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
