import { HotelcheckinDetailsComponent } from '../hotelcheckin-details/hotelcheckin-details.component';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HotelcheckinService } from "../services/hotelcheckin.service";
import { Hotelcheckin } from "../hotelcheckin";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotelcheckin-list',
  templateUrl: './hotelcheckin-list.component.html',
  styleUrls: ['./hotelcheckin-list.component.css']
})
export class HotelcheckinListComponent implements OnInit {
  hotelcheckins: Observable<Hotelcheckin[]>;

  status: string;

  constructor(private hotelcheckinService: HotelcheckinService,
    private router: Router) { }

  ngOnInit(): void {
    this.filterByStatus(this.status);
  }

  reloadData() {
    this.hotelcheckins = this.hotelcheckinService.getHotelcheckinList();
    console.log(this.hotelcheckins);
  }

  deleteHotelcheckin(id: number) {
    this.hotelcheckinService.deleteHotelcheckin(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  hotelcheckinDetails(id: number){
    this.router.navigate(['/checkin/details', id]);
  }

  hotelcheckinClose(id: number) {
    let hCheckin = new Hotelcheckin();
    let outDate = new Date();
    this.getVlTotalClose(id, outDate).then(vlData => {
      hCheckin.outDate = outDate;
      hCheckin.ieStatus = 'E';
      hCheckin.vlTotal = vlData;
      this.hotelcheckinService.closeHotelcheckin(id, hCheckin)
        .subscribe(
          data => {
            console.log(data);
            this.filterByStatus(this.status);
          },
          error => console.log(error));
    });
  }

  filterByStatus(status: string) {
    this.status = status || 'A';
      this.hotelcheckins = this.hotelcheckinService.getHotelcheckinsByStatus(this.status);
      console.log(this.hotelcheckins);
  }

  filterCheckinById(id) {
    return this.hotelcheckins.pipe(
      map(response => {
        return response.filter(item => item.id === id);        
      })
    );
  }

  getVlTotalClose(id,outDate): Promise<any> {
    return new Promise((resolve, reject) => this.filterCheckinById(id)
    .subscribe(data => {
      let vlCalculated = 0;
        let hCheckin = data[0];
        vlCalculated = this.calcValueDailys(hCheckin, outDate);
    
        return resolve(vlCalculated);
      }));
  }

  calcValueDailys(hCheckin: Hotelcheckin, outDate: Date) {
    let vlTotal = 0;
    let entryDate = new  Date(hCheckin.entryDate);
    let qtDailys = Math.ceil((Math.abs(outDate.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24))) || 1;
    let qtDailyWeekend = this.verifyDailyWkd(entryDate, outDate);
    let ieDailyExtra = this.verifyDailyExt(outDate);

    vlTotal += qtDailys * (120 + (hCheckin.ieVehicle ? 15 : 0));
    vlTotal += qtDailyWeekend * (30 + (hCheckin.ieVehicle ? 5 : 0)); 

    if(ieDailyExtra){
      if(this.isWeekDay(outDate)) {
        vlTotal += 120;
      } else {
        vlTotal += 150;
      }
    }

    return vlTotal;
  }

  verifyDailyWkd(dtIni: Date, dtEnd: Date) {
    let qtDaysExtra = 0;

    while(dtIni < dtEnd) {
      let day = dtIni.getDay();
      if(day == 0 || day == 6){
        qtDaysExtra++;
      }
      dtIni.setDate(dtIni.getDate() + 1);
    }

    return qtDaysExtra;
  }

  verifyDailyExt(outDate: Date) {
    let outHours = outDate.getHours();
    let outMinutes = outDate.getMinutes();

    if(outHours > 16) {
      return true;
    } else if(outHours == 16 && outMinutes > 30) {
      return true
    } else {
      return false;
    }
  }

  isWeekDay(dateNow: Date) {
    // let dateNow = new Date();
		
		let day = dateNow.getDay();
		
		if(day == 1 || day == 7) {
			return false;
		}
		
		return true;
	}

}
