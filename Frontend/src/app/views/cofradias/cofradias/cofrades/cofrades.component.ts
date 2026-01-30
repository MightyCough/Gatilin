import { Component } from '@angular/core';
import { Cofrades } from 'src/models/cuadrillas';
import { CuadrillasService } from 'src/services/GetCuadrillas';
import { SessionService } from 'src/services/SessionService';

@Component({
  selector: 'app-cofrades',
  standalone: true,
  imports: [],
  templateUrl: './cofrades.component.html',
  styleUrl: './cofrades.component.css'
})
export class CofradesComponent {
  cofrades: Cofrades[] = [];
  cuadrillaId: number | null = this.sessionService.getCofradiaId();

  constructor(
    private cuadrillasService: CuadrillasService,
    private sessionService: SessionService
    ) { }

  ngOnInit() {
    this.cuadrillasService.getCofrades(Number(this.cuadrillaId))
    .subscribe(cofrades =>{
      this.cofrades = cofrades
    });
  }

}
