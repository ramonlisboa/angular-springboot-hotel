import { HotelguestDetailsComponent } from '../hotelguest-details/hotelguest-details.component';
import { Observable } from "rxjs";
import { HotelguestService } from "../services/hotelguest.service";
import { Hotelguest } from "../hotelguest";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelguest-list',
  templateUrl: './hotelguest-list.component.html',
  styleUrls: ['./hotelguest-list.component.css']
})
export class HotelguestListComponent implements OnInit {
  hotelguests: Observable<Hotelguest[]>;

  constructor(private hotelguestService: HotelguestService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.hotelguests = this.hotelguestService.getHotelguestList();
  }

  deleteHotelguest(id: number) {
    this.hotelguestService.deleteHotelguest(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  hotelguestDetails(id: number){
    this.router.navigate(['/guests/details', id]);
  }

}
