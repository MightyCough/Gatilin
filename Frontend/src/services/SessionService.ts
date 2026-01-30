import { Injectable } from "@angular/core";
import { User } from "src/models/user";

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    private user: User | null = null;
    private cofradia: number | null = null;
    private bordaduria: number | null = null;

    public setUser(user: User) {
        this.user = user;
        if (user && user.id_cofradia !== null) {
            localStorage.setItem('id_cofradia', user.id_cofradia.toString());
            localStorage.setItem('token', user.token);
        }
    }

    public getUser(): User | null {
        return this.user;
    }

    public getIdCofradia(): number | null {
        if (this.user && this.user.id_cofradia !== null) {
            return this.user.id_cofradia;
        } else {
            const id_cofradia = localStorage.getItem('id_cofradia');
            return id_cofradia !== null ? Number(id_cofradia) : null;
        }
    }

    public isIdCofradiaNotNull(): boolean {
        const id_cofradia = localStorage.getItem('id_cofradia');
        return id_cofradia !== null;
    }

    public clearSession(): void {
        this.user = null;
        localStorage.removeItem('id_cofradia');
        localStorage.removeItem('token');
    }

    public setCofradiaId(id: number) {
        this.cofradia = id;
        localStorage.removeItem('cofradiaId');
        localStorage.setItem('cofradiaId', id.toString());
    }
      
    public getCofradiaId(): number | null {
        const cofradiaId = localStorage.getItem('cofradiaId');
        return cofradiaId !== null ? Number(cofradiaId) : null;
    }

    public setBordaduriaId(id: number) {
        this.bordaduria = id;
        localStorage.removeItem('bordaduriaId');
        localStorage.setItem('bordaduriaId', id.toString());
    }

    public getBordaduriaId(): number | null {
        const bordaduriaId = localStorage.getItem('bordaduriaId');
        return bordaduriaId !== null ? Number(bordaduriaId) : null;
    }
}