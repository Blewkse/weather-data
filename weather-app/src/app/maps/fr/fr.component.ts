import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { WeatherMongoService } from '../../services/weather-mongo.service';
import { GrahamSortService } from '../../services/graham-sort.service';
import { firstValueFrom } from 'rxjs';
import {
  jsonPointData,
  jsonPointTempData,
  pointData,
  pointTempData,
} from '../../models/data.model';

@Component({
  selector: 'app-fr',
  templateUrl: './fr.component.html',
  styleUrls: ['./fr.component.css'],
})
export class FrComponent implements AfterViewInit {
  constructor(
    private weatherService: WeatherMongoService,
    private grahamService: GrahamSortService
  ) {}

  private map!: L.Map;
  private currentsPointsOnMap: Array<[lat: number, long: number]> = [];

  protected Id: number = 0;

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
    const iconDefault = L.icon({
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
      iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = iconDefault;

    tiles.addTo(this.map);
  }

  async ngAfterViewInit() {
    this.initMap();
    await this.setGlobalData();
    // console.log(firstValueFrom(this.weatherService.getFranceTempData()));
    // console.log(firstValueFrom(this.weatherService.getFranceData()));
  }

  async setDataMarker() {
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Polygon || layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
    let franceData = await firstValueFrom(this.weatherService.getFranceData());
    franceData.data.forEach((point, index, array) => {
      L.marker([
        point.position.coordinates[0],
        point.position.coordinates[1],
      ]).addTo(this.map);
    });
  }

  async setTempData() {
    this.Id = 1;
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Polygon || layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
    let tab = await firstValueFrom(this.weatherService.getFranceTempData());
    let tabHot: Array<pointTempData> = [];
    let tabMedium: Array<pointTempData> = [];
    let tabCold: Array<pointTempData> = [];
    tab.data.forEach((element) => {
      if (element.airTemperature.value > 27) {
        tabHot.push(element);
      } else if (element.airTemperature.value > 22) {
        tabMedium.push(element);
      } else {
        tabCold.push(element);
      }
    });

    await this.setData(tabHot, 'orange');
    await this.setData(tabMedium, 'blue');
    await this.setData(tabCold, 'green');
  }

  async setPrecData() {
    this.Id = 2;
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Polygon || layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
    let tab = await firstValueFrom(this.weatherService.getFrancePrecData());
    tab.data.forEach((element) => {
      L.marker([
        element.position.coordinates[0],
        element.position.coordinates[1],
      ])
        .bindPopup(
          element.precipitationEstimatedObservation.estimatedWaterDepth.toString()
        )
        .addTo(this.map);
    });
  }

  async setGlobalData() {
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Polygon || layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
    let tab = await firstValueFrom(this.weatherService.getFranceData());
    await this.setData(tab.data, 'red');
  }

  async setData(data: Array<pointData>, color: string) {
    this.currentsPointsOnMap = [];
    data.forEach((point, index, array) => {
      this.currentsPointsOnMap.push([
        point.position.coordinates[0],
        point.position.coordinates[1],
      ]);
    });
    this.currentsPointsOnMap = this.grahamService.grahamScan(
      this.currentsPointsOnMap
    );
    L.polygon(this.currentsPointsOnMap, { color: color }).addTo(this.map);
  }
}
