import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BusinessvoipComponent } from './businessvoip/businessvoip.component';
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path:'businessvoip', component: BusinessvoipComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
