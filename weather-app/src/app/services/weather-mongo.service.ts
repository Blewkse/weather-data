import { Injectable } from '@angular/core';
import { weatherData } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherMongoService {
  constructor() {}

  getAllData(): weatherData {}
}
