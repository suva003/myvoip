import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BusinessvoipComponent } from './businessvoip/businessvoip.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'shop', component: ShopComponent},
  {path: 'shop', component: ShopComponent},
  {path:'businessvoip', component: BusinessvoipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
