import { Component } from '@angular/core';
import { GeolocationService } from 'src/services/GeolocationService';
import {} from 'googlemaps';
import { GetGeoCoordsComponent } from '../get-geo-coords/get-geo-coords.component';
import { SessionService } from 'src/services/SessionService';

@Component({
  selector: 'app-update-geo-coords',
  standalone: true,
  imports: [GetGeoCoordsComponent],
  templateUrl: './update-geo-coods.component.html',
  styleUrl: './update-geo-coods.component.css'
})
export class UpdateGeoCoordsComponent {
  latitude!: number;
  longitude!: number;
  error: string = '';
  map!: google.maps.Map;
  marker!: google.maps.Marker;

  constructor(
    private geolocationService: GeolocationService,
    private sessionService: SessionService,
    ) { }

  ngOnInit() {
    this.updateLocation();
  }

  updateLocation() {
    setInterval(() => {
      this.geolocationService.getCurrentLocation()
        .then((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          let idCofradia = this.sessionService.getIdCofradia();
          console.log(idCofradia);
          console.log(this.latitude);
          console.log(this.longitude);
          if (idCofradia) {
            this.geolocationService.updateCuadrillaCoords(
              idCofradia, 
              this.latitude, 
              this.longitude)
          }
        })
        .catch((error) => {
          this.error = error;
        });
    }, 10000);
  }
}