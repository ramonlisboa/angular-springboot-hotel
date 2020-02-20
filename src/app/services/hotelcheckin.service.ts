import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelcheckinService {

  private baseUrl = 'http://localhost:8080/springboot-hotel-rest/api/v1/hotelcheckins';

  constructor(private http: HttpClient) { }

  getHotelcheckin(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  createHotelcheckin(hotelcheckin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, hotelcheckin);
  }

  updateHotelcheckin(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  closeHotelcheckin(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/close/${id}`, value);
  }

  deleteHotelcheckin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getHotelcheckinList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getHotelcheckinsByStatus(ieStatus: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/status/${ieStatus}`);
  }
}
