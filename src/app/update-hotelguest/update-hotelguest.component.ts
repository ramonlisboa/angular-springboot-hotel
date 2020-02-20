import { Component, OnInit } from '@angular/core';
import { Hotelguest } from '../hotelguest';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelguestService } from '../services/hotelguest.service';

@Component({
  selector: 'app-update-hotelguest',
  templateUrl: './update-hotelguest.component.html',
  styleUrls: ['./update-hotelguest.component.css']
})
export class UpdateHotelguestComponent implements OnInit {

  id: number;
  hotelguest: Hotelguest;
  submitted = false;

  constructor(private hotelguestService: HotelguestService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitted = false;
    this.hotelguest = new Hotelguest();

    this.id = this.route.snapshot.params['id'];

    this.hotelguestService.getHotelguest(this.id)
    .subscribe( data => {
      console.log(data);
      this.hotelguest = data;
    }, error => console.log(error));
  }

  updateHotelguest() {
    this.hotelguestService.updateHotelguest(this.id, this.hotelguest)
    .subscribe(data => console.log(data), error => console.log(error));
    this.hotelguest = new Hotelguest();
    this.goToList();
  }

  onSubmit() {
    this.updateHotelguest();
    this.submitted = true;
  }

  goToList() {
    this.router.navigate(['/hotelguests']);
  }

}
