import { Component } from '@angular/core';
import { GetGeoCoordsComponent } from 'src/app/tools/get-geo-coords/get-geo-coords.component';
import { CuadrillasService } from 'src/services/GetCuadrillas';
import { Cofradia, Cronograma } from 'src/models/cuadrillas';
import { SessionService } from 'src/services/SessionService';

@Component({
  selector: 'app-cofradia-detalle',
  standalone: true,
  imports: [GetGeoCoordsComponent],
  templateUrl: './cofradia-detalle.component.html',
  styleUrl: './cofradia-detalle.component.css'
})
export class CofradiaDetalleComponent {
  id!: number;
  cofradia: Cofradia | null = null;
  cronogramas: Cronograma[] = [];
  cronogramasVispera: Cronograma[] = [];
  cronogramas1er: Cronograma[] = [];
  cronogramas2do: Cronograma[] = [];
  cronogramas3er: Cronograma[] = [];
  cronogramas4to: Cronograma[] = [];
  cronogramasDespedida: Cronograma[] = [];

  constructor(
    private cuadrillasService: CuadrillasService,
    private sessionService: SessionService, 
  ) { }

  ngOnInit() {
    this.getCofradiaInfo();
    this.getCronogramas();
    GetGeoCoordsComponent.prototype.id_cofradia = this.id;
  }

  getCofradiaInfo() {
    this.id = this.sessionService.getCofradiaId()!;
    this.cuadrillasService.getCuadrilla(this.id)
    .subscribe((cofradia: Cofradia) => {
      this.cofradia = cofradia;
    });
  }

  getCronogramas() {
    this.id = this.sessionService.getCofradiaId()!;
    this.cuadrillasService.getCronograma(this.id)
    .subscribe(cronogramas => {
      // Sort cronogramas by date
      cronogramas.sort((a, b) => { return new Date(a.fecha).getTime() - new Date(b.fecha).getTime(); });
      this.cronogramas = cronogramas;
      this.cronogramasVispera = cronogramas.filter(cronograma => cronograma.dia.toLocaleLowerCase() == 'vispera' || cronograma.dia.toLocaleLowerCase() == 'víspera');
      this.cronogramas1er = cronogramas.filter(cronograma => cronograma.dia.toLocaleLowerCase() == '1er día' || cronograma.dia.toLocaleLowerCase() == '1er dia');
      this.cronogramas2do = cronogramas.filter(cronograma => cronograma.dia.toLocaleLowerCase() == '2do día' || cronograma.dia.toLocaleLowerCase() == '2do dia');
      this.cronogramas3er = cronogramas.filter(cronograma => cronograma.dia.toLocaleLowerCase() == '3er día' || cronograma.dia.toLocaleLowerCase() == '3er dia');
      this.cronogramas4to = cronogramas.filter(cronograma => cronograma.dia.toLocaleLowerCase() == '4to día' || cronograma.dia.toLocaleLowerCase() == '4to dia');
      this.cronogramasDespedida = cronogramas.filter(cronograma => cronograma.dia.toLocaleLowerCase() == 'despedida');
    });

  }

formatDate(dateS: string): string {
  const [year, month, day] = dateS.split('-').map(Number);
  const formattedDate = new Date(year, month - 1, day);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('es', options).format(formattedDate);
}

  asignarColor(index: number): string {
    /* #0AA0A0 Doble */
    const coloresDisponibles = ['#1092D9', '#14E080', '#0AA0A0', '#d07de3', '#5fb4de', '#E50DAB'];
    const colorIndex = index % coloresDisponibles.length;
    return coloresDisponibles[colorIndex];
  }

}
