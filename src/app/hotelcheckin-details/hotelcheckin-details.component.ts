import { Component, OnInit, Input } from '@angular/core';
import { Hotelcheckin } from '../hotelcheckin';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelcheckinService } from '../services/hotelcheckin.service';
import { HotelcheckinListComponent } from '../hotelcheckin-list/hotelcheckin-list.component';


@Component({
  selector: 'app-hotelcheckin-details',
  templateUrl: './hotelcheckin-details.component.html',
  styleUrls: ['./hotelcheckin-details.component.css']
})
export class HotelcheckinDetailsComponent implements OnInit {

  id: number;
  hotelcheckin: Hotelcheckin;

  constructor(private route: ActivatedRoute,private router: Router,
    private hotelcheckinService: HotelcheckinService) { }

  ngOnInit(): void {
    this.hotelcheckin = new Hotelcheckin();

    this.id = this.route.snapshot.params['id'];

    this.hotelcheckinService.getHotelcheckin(this.id)
    .subscribe(data => {
      console.log(data);
      this.hotelcheckin = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['/hotelcheckins']);
  }

}
