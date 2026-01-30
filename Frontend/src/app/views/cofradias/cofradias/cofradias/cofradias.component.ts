import { Component } from '@angular/core';
import { CuadrillasService } from 'src/services/GetCuadrillas';
import { Cofradia } from 'src/models/cuadrillas';
import { SessionService } from 'src/services/SessionService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cofradias',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './cofradias.component.html',
  styleUrl: './cofradias.component.css'
})
export class CofradiasComponent {
  menuOption: string = '';
  cofradias: Cofradia[] = [];
  showActive: boolean = true;
  todasClass: string = 'pb-6 text-2xl text-center font-extrabold text-white bg-gradient-to-r w-full p-4';
  activasClass: string = 'pb-6 text-2xl text-center font-extrabold text-white bg-gradient-to-r from-amber-400 to-amber-500 w-full p-4';
  activasElement = document.getElementById('activas');
  todasElement = document.getElementById('todas');

  onOption(menuOption: string){
    this.menuOption = menuOption;
  }

  constructor(
    private cuadrillasService: CuadrillasService,
    private sessionService: SessionService
    ) { }

  ngOnInit() {
    this.cuadrillasService.getCuadrillas()
    .subscribe(cofradias =>{
      this.cofradias = cofradias
    });
  }

  selectCofradia(id: number) {
    this.sessionService.setCofradiaId(id);
  }

  busqueda: string = ''; 

  //búsqueda
  filtrarCofradias(): Cofradia[] {
    return this.cofradias.filter(cofradia =>
      cofradia.nombre_completo.toLowerCase().includes(this.busqueda.toLowerCase())
    ).sort((a, b) => a.id - b.id);
  }

  cofradiasActivas(): Cofradia[] {
    var activas = this.cofradias.filter(cofradia => cofradia.is_live == true);
    return activas.filter(cofradia =>
      cofradia.nombre_completo.toLowerCase().includes(this.busqueda.toLowerCase())
    ).sort((a, b) => a.id - b.id);
  }
  /*
  getDynamicBackground(color: string): string {
    return `linear-gradient(to right, var(--tw-gradient-from-${color}-500), var(--tw-gradient-to-${color}-700))`;
  }*/

  activas() {
    this.showActive = true;
    this.activasClass = 'pb-6 text-2xl text-center font-extrabold text-white bg-gradient-to-r from-amber-400 to-amber-500 w-full p-4';
    this.todasClass = 'pb-6 text-2xl text-center font-extrabold text-white bg-gradient-to-r w-full p-4';
  }

  todas() {
    this.showActive = false;
    this.activasClass = 'pb-6 text-2xl text-center font-extrabold text-white bg-gradient-to-r w-full p-4';
    this.todasClass = 'pb-6 text-2xl text-center font-extrabold text-white bg-gradient-to-r from-amber-400 to-amber-500 w-full p-4';
  }

  asignarColor(index: number): string {
    /* #0AA0A0 Doble */
    const coloresDisponibles = ['#1092D9', '#870DE5', '#0AA0A0', '#5fb4de', '#20d456', '#E50DAB'];
    const colorIndex = index % coloresDisponibles.length;
    return coloresDisponibles[colorIndex];
  }


}

