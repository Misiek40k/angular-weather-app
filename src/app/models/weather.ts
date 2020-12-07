export class Weather {

  applicableDate: string;
  weatherStateName: string;
  theTemp: string;
  airPressure: string;
  predictability: string;

  constructor(input) {
    this.applicableDate = input.applicable_date;
    this.weatherStateName = input.weather_state_name;
    this.theTemp = input.the_temp;
    this.airPressure = input.air_pressure;
    this.predictability = input.predictability;
  }
}
