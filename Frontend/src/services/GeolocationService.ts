import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { djangoUrl } from 'src/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private apiURL: string = djangoUrl+'cuadrillas/';

  constructor(
    private http: HttpClient,
    ) { }

  getCurrentLocation(): Promise<Position> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }

// ------------------------------------------------------------------------------------
// COORDENADAS DE CUADRILLAS
    // Actualizar coordenadas de cuadrilla
    public updateCuadrillaCoords(id: number, latitud: number, longitud: number): void {
      this.http.post(this.apiURL + 'actualizar-coordenadas/', {
          id : id,
          latitud : latitud,
          longitud : longitud
      }).subscribe(
          (error) => console.log(error)
      );
  }
  // Obtener coordenadas de cuadrilla
  public getCuadrillaCoords(id: number): Observable<{latitud: number, longitud:number}> {
    return this.http.get<{latitud: number, longitud:number}>(this.apiURL + 'coordenadas/' + id + '/');
  }
}

interface Position {
  coords: {
      latitude: number;
      longitude: number;
  };
}