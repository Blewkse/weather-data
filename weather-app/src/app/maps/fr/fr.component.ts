import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { WeatherMongoService } from '../../services/weather-mongo.service';
import { GrahamSortService } from "../../services/graham-sort.service";
import { firstValueFrom } from "rxjs";
import { jsonPointData } from "../../models/data.model";

@Component({
  selector: 'app-fr',
  templateUrl: './fr.component.html',
  styleUrls: ['./fr.component.css'],
})
export class FrComponent implements AfterViewInit {
  constructor(private weatherService: WeatherMongoService, private grahamService: GrahamSortService) {}

  private map!: L.Map;
  private currentsPointsOnMap : Array<[lat : number,long: number ]> = [];




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

  async ngAfterViewInit() {
    this.initMap();
    await this.setGlobalData();
  }


  async setDataMarker(){
    let franceData = await firstValueFrom(this.weatherService.getFranceData());
    franceData.data.forEach((point, index, array)=>{
      L.marker([point.position.coordinates[0],point.position.coordinates[1]]).addTo(this.map);
    })
  }
  async setGlobalData(){
    await this.setData(await firstValueFrom(this.weatherService.getFranceData()));
  }
  async setTemperatureData(){
    await this.setData(await firstValueFrom(this.weatherService.getFranceData()));
  }

  async setData(data: jsonPointData){
    data.data.forEach((point, index, array)=>{
      this.currentsPointsOnMap.push([ point.position.coordinates[0], point.position.coordinates[1]]);
    })
    this.currentsPointsOnMap = this.grahamService.grahamScan(this.currentsPointsOnMap);
    L.polygon(this.currentsPointsOnMap, {color: 'red'}).addTo(this.map);

  }


}
