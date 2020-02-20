import { HotelguestService } from '../services/hotelguest.service';
import { Hotelguest } from '../hotelguest';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-hotelguest',
  templateUrl: './create-hotelguest.component.html',
  styleUrls: ['./create-hotelguest.component.css']
})
export class CreateHotelguestComponent implements OnInit {

  hotelguest: Hotelguest = new Hotelguest();
  submitted = false;

  constructor(private hotelguestService: HotelguestService,
    private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }

  newHotelguest(): void {
    this.submitted = false;
    this.hotelguest = new Hotelguest();
  }

  save() {
    this.hotelguestService.createHotelguest(this.hotelguest)
    .subscribe(data => console.log(data), error => console.log(error));
    this.hotelguest = new Hotelguest();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/hotelguests']);
  }

  return() {
    this._location.back();
  }

}
