import { Injectable } from '@angular/core';
import { weatherData } from '../models/data.model';
import { HttpClient } from '@angular/common/http';

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
}
