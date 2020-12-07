export class City {

  lat: string;
  lng: string;
  locationType: string;
  title: string;
  woeid: number;

  constructor(input) {
    if (input.latt_long) {
      this.lat = input.latt_long.split(',')[0];
      this.lng = input.latt_long.split(',')[1];
    }

    this.locationType = input.location_type;
    this.title = input.title;
    this.woeid = input.woeid;
  }
}
