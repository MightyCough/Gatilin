import { Component } from '@angular/core';
import { CuadrillasService } from 'src/services/GetCuadrillas';
import { Bordaduria } from 'src/models/cuadrillas';
import { SessionService } from 'src/services/SessionService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bordadurias',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './bordadurias.component.html',
  styleUrl: './bordadurias.component.css'
})
export class BordaduriasComponent {
  menuOption: string = '';
  bordadurias: Bordaduria[] = [];

  onOption(menuOption: string){
    this.menuOption = menuOption;
  }

  constructor(
    private cuadrillasService: CuadrillasService,
    private sessionService: SessionService
    ) { }

  ngOnInit() {
    this.cuadrillasService.getBordadurias()
    .subscribe(bordadurias =>{
        this.bordadurias = bordadurias
      });
  }

  selectBordaduria(id: number) {
    this.sessionService.setBordaduriaId(id);
  }

  busqueda: string = ''; 

  //búsqueda
  filtrarBordadurias(): Bordaduria[] {
    return this.bordadurias.filter(bordaduria =>
      bordaduria.nombre_bordaduria.toLowerCase().includes(this.busqueda.toLocaleLowerCase())
    );
  }

  asignarColor(index: number): string {
    /* #0AA0A0 Doble */
    const coloresDisponibles = ['#1092D9', '#14E080', '#0AA0A0', '#8BE50D', '#870DE5', '#E50DAB'];
    const colorIndex = index % coloresDisponibles.length;
    return coloresDisponibles[colorIndex];
  }
}
