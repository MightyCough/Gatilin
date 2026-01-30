import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cofradia, Cofrades, Bordaduria, Cronograma } from "src/models/cuadrillas";
import { Observable } from 'rxjs';
import { djangoUrl } from 'src/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CuadrillasService {
    private apiURL: string = djangoUrl+'cuadrillas/';

    constructor(private http: HttpClient) { }
 // ------------------------------------------------------------------------------------
// BUSQUEDA DE CUADRILLAS
    // Obtener todas las cuadrillas
    public getCuadrillas(): Observable<Cofradia[]> {
        return this.http.get<Cofradia[]>(this.apiURL + 'lista/');
    }
// ------------------------------------------------------------------------------------
// OBTENER CUADRILLA POR ID
    public getCuadrilla(id: number): Observable<Cofradia> {
        return this.http.get<Cofradia>(this.apiURL + 'cuadrilla/' + id + '/');
    }
// ------------------------------------------------------------------------------------
// OBTENER COFRADES DE CUADRILLA
    public getCofrades(id: number): Observable<Cofrades[]> {
        return this.http.get<Cofrades[]>(this.apiURL + 'cofrades/' + id + '/');
    }
// ------------------------------------------------------------------------------------
// OBTENER BORDADURIAS
    public getBordadurias(): Observable<Bordaduria[]> {
        return this.http.get<Bordaduria[]>(this.apiURL + 'bordadurias/');
    }
// OBTENER UNA BORDADURIA
    public getBordaduria(id: number): Observable<Bordaduria> {
        return this.http.get<Bordaduria>(this.apiURL + 'bordaduria/' + id + '/');
    }
// ------------------------------------------------------------------------------------
// ENVIAR FOTO DENUNCIA
    public sendDenuncia(data: FormData): Observable<any> {
        return this.http.post<any>(djangoUrl + 'denuncias/enviar/', data);
    }
// ------------------------------------------------------------------------------------
// OBTENER CRONOGRAMA
    public getCronograma(id: number): Observable<Cronograma[]> {
        return this.http.get<Cronograma[]>(this.apiURL + 'cronograma/' + id + '/');
    }
}