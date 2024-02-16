import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
    {path:'homepage',component:HomeComponent},
    {path:'placeholder',component:PlaceorderComponent},
    {path:'vieworders',component:OrderComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}