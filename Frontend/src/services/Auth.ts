import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { djangoUrl } from "src/constants/constants";

import { User } from "src/models/user";
import { SessionService } from "./SessionService";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiURL: string = djangoUrl + 'cuentas/';

    constructor(
        private http: HttpClient,
        private sessionService: SessionService,
    ) { }
// ------------------------------------------------------------------------------------
    // INICIAR SESION
    public iniciarSesion(email: string, password: string): void {
        this.http.post<{cofradia: any, key: any}>(this.apiURL + 'authlogin/', {
            email : email,
            password : password
        }).subscribe(
            (response) => {
                let user = new User();
                user.id_cofradia = response.cofradia;
                user.token = response.key;
                this.sessionService.setUser(user);
            },
        );
    }
// ------------------------------------------------------------------------------------
    // REGISTRARSE
    public registrarse(email: string, password: string): void {
        this.http.post(this.apiURL + 'auth/registration/', {
            username : email,
            email : email,
            password1 : password,
            password2 : password
        }).subscribe(
            (response) => console.log(response),
        );
    }
// ------------------------------------------------------------------------------------
    // CERRAR SESION
    public cerrarSesion(): void {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', 'Token ' + token);
        this.http.post(this.apiURL + 'authlogout/', { headers }).subscribe(
            (response) => console.log(response),
        );
        this.sessionService.clearSession();
    }
// ------------------------------------------------------------------------------------
}