import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HotelguestService } from "../services/hotelguest.service";
import { Hotelguest } from "../hotelguest";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-guest',
  templateUrl: './list-guest.component.html',
  styleUrls: ['./list-guest.component.css']
})
export class ListGuestComponent implements OnInit {
  @Output() sendGuest = new EventEmitter();
  
  hotelguests: Observable<Hotelguest[]>;

  submitted = false;

  constructor(private hotelguestService: HotelguestService,
    private router: Router) { }

  ngOnInit(): void {
  }

  keyPress(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    let inputChar = (<HTMLInputElement>event.target).value;

    if (pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    } else {
      this.onKeyPress(inputChar.toString());
    }
  }

  onKeyPress(name: string) {
    if (name.length > 1) {
      this.hotelguests = this.hotelguestService.getHotelguestByName(name);
      console.log(this.hotelguests);
    } else {
      this.hotelguests =  null;
    }
  }

  onSelect(idSelect: number) {
    let hotelGust = this.hotelguests.pipe(
      map(response => {
        let guest = response.filter(item => item.id === idSelect);
        this.hotelguests = null;
        return guest;
      })
    );

    console.log(hotelGust);
    this.feedback(hotelGust);
  }

  feedback(hotelguest) {
    this.sendGuest.emit(hotelguest)
  }

}
