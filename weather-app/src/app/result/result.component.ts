import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {
  jsonPointData,
  jsonPointTempData,
  pointData,
  pointTempData,
} from '../models/data.model';
import { WeatherMongoService } from '../services/weather-mongo.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit, OnChanges {
  constructor(private weatherService: WeatherMongoService) {}

  @Input() Id: number = 0;

  protected tab!: jsonPointData;

  async ngOnInit() {
    switch (this.Id) {
      case 0:
        this.tab = await firstValueFrom(this.weatherService.getFranceData());
        break;
      case 1:
        this.tab = await firstValueFrom(
          this.weatherService.getFranceTempData()
        );
        break;
      case 2:
        this.tab = await firstValueFrom(
          this.weatherService.getFrancePrecData()
        );
    }
    console.log(this.tab);
  }

  async ngOnChanges(changes: SimpleChanges) {
    if ('Id' in changes) {
      switch (this.Id) {
        case 0:
          this.tab = await firstValueFrom(this.weatherService.getFranceData());
          break;
        case 1:
          this.tab = await firstValueFrom(
            this.weatherService.getFranceTempData()
          );
          break;
        case 2:
          this.tab = await firstValueFrom(
            this.weatherService.getFrancePrecData()
          );
      }
    }
  }
}
