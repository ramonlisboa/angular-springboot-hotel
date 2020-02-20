import { HotelcheckinService } from '../services/hotelcheckin.service';
import { Hotelcheckin } from '../hotelcheckin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Hotelguest } from '../hotelguest';

@Component({
  selector: 'app-create-hotelcheckin',
  templateUrl: './create-hotelcheckin.component.html',
  styleUrls: ['./create-hotelcheckin.component.css']
})
export class CreateHotelcheckinComponent implements OnInit {

  VL_DAILY_UTIL = 120;
  VL_DAILY_WEEKEND = 150;
	VL_GARAGE_UTIL = 15; 
  VL_GARAGE_WEEKEND = 20; 
  
  hotelcheckin: Hotelcheckin = new Hotelcheckin();
  hotelguest: Hotelguest = new Hotelguest();
  submitted = false;
  selectGuest = false;

  constructor(private hotelcheckinService: HotelcheckinService,
    private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }

  newHotelcheckin(): void {
    this.submitted = false;
    this.hotelcheckin = new Hotelcheckin();
  }

  save() {
    this.hotelcheckinService.createHotelcheckin(this.validData(this.hotelcheckin))
    .subscribe(data => console.log(data), error => console.log(error));
    this.hotelcheckin = new Hotelcheckin();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/hotelcheckins']);
  }

  return() {
    this._location.back();
  }

  reciverFeedback(hotelguest) {
    this.hotelguest = new Hotelguest();
    hotelguest.subscribe(data => {
      this.hotelcheckin.hotelguest = data[0];
      this.hotelguest = data[0];
      console.log(data);
    }, error => console.log(error));    
  }

  validData(hotelcheckin: Hotelcheckin) {
    let vlTotal:number;
    vlTotal = this.getVlTotalInitial(hotelcheckin);
    hotelcheckin.ieStatus = 'A';
    hotelcheckin.vlTotal = vlTotal;

    return hotelcheckin;
  }

  isWeekDay() {
    let dateNow = new Date();
		
		let day = dateNow.getDay();
		
		if(day == 1 || day == 7) {
			return false;
		}
		
		return true;
	}
	
	getVlDaily() {
		if(this.isWeekDay()) {
			return this.VL_DAILY_UTIL;
		} 
		
		return this.VL_DAILY_WEEKEND;
	}
	
	getVlGarage(ieVehicle) {
		if(ieVehicle) {
			if(this.isWeekDay()) {
				return this.VL_GARAGE_UTIL;
			} else {
				return this.VL_GARAGE_WEEKEND;
			}
		}
		return 0;
	}
	
	getVlTotalInitial(hotelcheckin) {
		let vlCalculated = 0;
		
		vlCalculated = this.getVlDaily() + this.getVlGarage(hotelcheckin.ieVehicle);
		
		return vlCalculated;
	}
	
	isVlExtraDaily(hotelcheckin) {
		let actualDate = new Date();
		let hourCalendar = hotelcheckin.outDate;
		
		
		if(hourCalendar.after(actualDate)) {
			return true;
		}
		return false;
	}
	
	getVlExtraDaily(hotelcheckin) {
		let vlExtra = 0;
		if(this.isVlExtraDaily(hotelcheckin)) {
			vlExtra = this.getVlDaily();
		}
		return vlExtra;
	}

}
