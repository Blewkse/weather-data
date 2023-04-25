import { Injectable } from '@angular/core';
import { jsonPointData, weatherData } from "../models/data.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherMongoService {
  constructor(private http: HttpClient) {}

  getAllData(): Object {
    return this.http.get('http://localhost:8000/maps/getAll').subscribe((result) => {
      return result;
    });
  }

  getFranceData(): Observable<jsonPointData> {
     return this.http
      .get<jsonPointData>('http://localhost:8000/maps/france/all');
  }
}
