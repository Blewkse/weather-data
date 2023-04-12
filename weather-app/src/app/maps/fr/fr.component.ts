import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { WeatherMongoService } from '../../services/weather-mongo.service';

@Component({
  selector: 'app-fr',
  templateUrl: './fr.component.html',
  styleUrls: ['./fr.component.css'],
})
export class FrComponent implements AfterViewInit {
  constructor(private weatherService: WeatherMongoService) {}

  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [46.684, 2.673],
      zoom: 3,
    });

    var tiles = L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 6,
        minZoom: 6,
      }
    );

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.weatherService.getFranceData();
  }
}
