import { Injectable } from '@angular/core';
import { weatherData } from '../models/data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherMongoService {
  constructor(private http: HttpClient) {}

  getAllData(): void {
    this.http.get('http://localhost:8000/maps/getAll').subscribe((result) => {
      console.log(result);
    });
  }

  getFranceData(): void {
    this.http
      .get('http://localhost:8000/maps/getFrance')
      .subscribe((result) => {
        console.log(result);
      });
  }
}
