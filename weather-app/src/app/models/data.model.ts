export interface weatherData {
  _id: string;
  st: string;
  ts: Date;
  position: {
    type: string;
    coordinates: [number, number];
  };
  elevation: number;
  callLetters: string;
  qualityControlProcess: string;
  dataSource: string;
  type: string;
  airTemperature: {
    value: number;
    quality: string;
  };
  dewPoint: {
    value: number;
    quality: string;
  };
  pressure: {
    value: number;
    quality: string;
  };
  wind: {
    direction: {
      angle: number;
      quality: string;
    };
    type: string;
    speed: {
      rate: number;
      quality: string;
    };
  };
  visibility: {
    distance: {
      value: number;
      quality: string;
    };
    variability: {
      value: string;
      quality: string;
    };
  };
  skyCondition: {
    ceilingHeight: {
      value: number;
      quality: string;
      determination: string;
    };
    cavok: string;
  };
  sections: string[];
  precipitationEstimatedObservation: {
    discrepancy: string;
    estimatedWaterDepth: number;
  };
}
