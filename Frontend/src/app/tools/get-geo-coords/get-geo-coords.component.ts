import { Component } from '@angular/core';
import { GeolocationService } from 'src/services/GeolocationService';
import {} from 'googlemaps';

@Component({
  selector: 'app-get-geo-coords',
  standalone: true,
  imports: [],
  templateUrl: './get-geo-coords.component.html',
  styleUrl: './get-geo-coords.component.css',
  providers: [GeolocationService]
})

export class GetGeoCoordsComponent {
  latitude!: number;
  longitude!: number;
  error: string = '';
  map!: google.maps.Map;
  marker!: google.maps.Marker;
  id_cofradia!: number;

  constructor(
    private geolocationService: GeolocationService,
    ) { }

  ngOnInit() {
    this.initMap();
    this.updateLocation();
  }

  updateLocation() {
    setInterval(() => {
      this.getLocation();
    }, 60000);
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: 17,
    });
    this.getLocation();
  }

  getLocation() {
    this.geolocationService.getCuadrillaCoords(this.id_cofradia)
    .subscribe(
      (response) => {
        this.latitude = response.latitud;
        this.longitude = response.longitud;
        this.map.setCenter({ lat: this.latitude, lng: this.longitude });
        this.map.setZoom(17);
        if (this.marker) {
          this.marker.setMap(null);
        }
        this.marker = new google.maps.Marker({
          position: { lat: this.latitude, lng: this.longitude },
          map: this.map,
        });
      }
    );
  }
}
