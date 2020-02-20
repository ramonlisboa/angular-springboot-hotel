import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { createCustomElement} from '@angular/elements';
// import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CreateHotelguestComponent } from './create-hotelguest/create-hotelguest.component';
import { HotelguestListComponent } from './hotelguest-list/hotelguest-list.component';
import { HotelguestDetailsComponent } from './hotelguest-details/hotelguest-details.component';
import { UpdateHotelguestComponent } from './update-hotelguest/update-hotelguest.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateHotelcheckinComponent } from './create-hotelcheckin/create-hotelcheckin.component';
import { UpdateHotelcheckinComponent } from './update-hotelcheckin/update-hotelcheckin.component';
import { HotelcheckinListComponent } from './hotelcheckin-list/hotelcheckin-list.component';
import { HotelcheckinDetailsComponent } from './hotelcheckin-details/hotelcheckin-details.component';
import { ListGuestComponent } from './list-guest/list-guest.component';
// import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    CreateHotelguestComponent,
    HotelguestListComponent,
    HotelguestDetailsComponent,
    UpdateHotelguestComponent,
    CreateHotelcheckinComponent,
    UpdateHotelcheckinComponent,
    HotelcheckinListComponent,
    HotelcheckinDetailsComponent,
    ListGuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
