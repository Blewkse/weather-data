import { TestBed } from '@angular/core/testing';

import { WeatherMongoService } from './weather-mongo.service';

describe('WeatherMongoService', () => {
  let service: WeatherMongoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherMongoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
