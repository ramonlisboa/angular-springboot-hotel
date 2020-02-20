import { Component, OnInit, Input } from '@angular/core';
import { Hotelguest } from '../hotelguest';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelguestService } from '../services/hotelguest.service';
import { HotelguestListComponent } from '../hotelguest-list/hotelguest-list.component';

@Component({
  selector: 'app-hotelguest-details',
  templateUrl: './hotelguest-details.component.html',
  styleUrls: ['./hotelguest-details.component.css']
})
export class HotelguestDetailsComponent implements OnInit {

  id: number;
  hotelguest: Hotelguest;

  constructor(private route: ActivatedRoute,private router: Router,
    private hotelguestService: HotelguestService) { }

  ngOnInit(): void {
    this.hotelguest = new Hotelguest();

    this.id = this.route.snapshot.params['id'];

    this.hotelguestService.getHotelguest(this.id)
    .subscribe(data => {
      console.log(data);
      this.hotelguest = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['/hotelguests']);
  }

}
