import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetGeoCoordsComponent } from './tools/get-geo-coords/get-geo-coords.component';
import { UpdateGeoCoordsComponent } from './tools/update-geo-coods/update-geo-coods.component';
import { PersonajesComponent } from './views/cofradias/personajes/personajes.component';
import { HistoriasComponent } from './views/cofradias/historias/historias.component';
import { FestivalComponent } from './views/cofradias/festival/festival.component';
import { BordaduriasComponent } from './views/cofradias/bordadurias/bordadurias/bordadurias.component';
import { NavidadComponent } from './views/cofradias/navidad/navidad.component';
import { CofradiasComponent } from './views/cofradias/cofradias/cofradias/cofradias.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { CofradiaDetalleComponent } from './views/cofradias/cofradias/cofradia-detalle/cofradia-detalle.component';
import { HomeComponent } from './views/cofradias/home/home.component';
import { FiestaDeLosNegritosComponent } from './layouts/fiesta-de-los-negritos/fiesta-de-los-negritos.component';
import { CofradesComponent } from './views/cofradias/cofradias/cofrades/cofrades.component';
import { ReportarComponent } from './views/cofradias/cofradias/reportar/reportar.component';
import { MeraktComponent } from './views/merakt/merakt/merakt.component';
import { DevelopersComponent } from './views/merakt/developers/developers.component';

const routes: Routes = [
    { path: 'coords', component: GetGeoCoordsComponent },
    { path: 'update-coords', component: UpdateGeoCoordsComponent },

    // Cofradias
    {path:'personajes',component:PersonajesComponent},
    {path:'historia',component:HistoriasComponent},
    {path:'festival',component:FestivalComponent},
    {path:'bordadurias',component:BordaduriasComponent},
    {path:'navidad',component:NavidadComponent},
    {path:'cofradia',component:CofradiasComponent},
    {path:'cofradia-detalle',component:CofradiaDetalleComponent},
    {path:'cofrades',component:CofradesComponent},
    {path:'reportar',component:ReportarComponent},

    /////////
    {path:'', redirectTo:'fiesta-de-los-negritos', pathMatch: 'full'},
    {path:'fiesta-de-los-negritos',component:FiestaDeLosNegritosComponent},

    {path:'home',component:HomeComponent},

    {
        path: "auth",
        component: AuthComponent,
        children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        ],
    },

    {
        path: "merakt",
        component: MeraktComponent,
        children: [
        { path: 'developers', component: DevelopersComponent },
        ],
    },
    ///////////////////
    /*
    {path:'dashboard',
        component:DashboardComponent,
        canActivate: [authGuard],
        children: [
        { path: 'home', component: HomeComponent },
        { path: 'historias', component: HistoriasComponent },
        ],
    },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
