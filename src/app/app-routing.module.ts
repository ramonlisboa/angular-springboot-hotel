import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelguestListComponent } from './hotelguest-list/hotelguest-list.component';
import { HotelguestDetailsComponent } from './hotelguest-details/hotelguest-details.component';
import { CreateHotelguestComponent } from './create-hotelguest/create-hotelguest.component';
import { UpdateHotelguestComponent } from './update-hotelguest/update-hotelguest.component';
import { HotelcheckinListComponent } from './hotelcheckin-list/hotelcheckin-list.component';
import { CreateHotelcheckinComponent } from './create-hotelcheckin/create-hotelcheckin.component';
import { UpdateHotelcheckinComponent } from './update-hotelcheckin/update-hotelcheckin.component';
import { HotelcheckinDetailsComponent } from './hotelcheckin-details/hotelcheckin-details.component';
import { ListGuestComponent } from './list-guest/list-guest.component';


const routes: Routes = [
  { path: '', redirectTo: 'hotelcheckins', pathMatch: 'full' },
  { path: 'hotelcheckins', component: HotelcheckinListComponent },
  { path: 'checkin/add', component: CreateHotelcheckinComponent },
  { path: 'checkin/update/:id', component: UpdateHotelcheckinComponent },
  { path: 'checkin/details/:id', component: HotelcheckinDetailsComponent },
  { path: 'hotelguests', component: HotelguestListComponent },
  { path: 'guests/add', component: CreateHotelguestComponent },
  { path: 'guests/update/:id', component: UpdateHotelguestComponent },
  { path: 'guests/details/:id', component: HotelguestDetailsComponent },
  { path: 'guests/name/:name', component: ListGuestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
