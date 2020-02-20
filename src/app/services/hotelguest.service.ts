import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelguestService {

  private baseUrl = 'http://localhost:8080/springboot-hotel-rest/api/v1/hotelguests';

  constructor(private http: HttpClient) { }

  getHotelguest(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  createHotelguest(hotelguest: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, hotelguest);
  }

  updateHotelguest(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteHotelguest(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getHotelguestList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getHotelguestByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`)
  }
}
