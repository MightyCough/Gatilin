import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CuadrillasService } from 'src/services/GetCuadrillas';
import { SessionService } from 'src/services/SessionService';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reportar',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './reportar.component.html',
  styleUrl: './reportar.component.css'
})
export class ReportarComponent {
  @ViewChild('video') videoElement!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  cofradiaId: number | null = this.sessionService.getCofradiaId();
  reporte: string = '';
  tipo: string = '';
  photoData: any;
  photoTaken: boolean = false;

  constructor(
    private cuadrillasService: CuadrillasService,
    private sessionService: SessionService,
    private location: Location
    ) { }

  ngAfterViewInit() {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment'} 
      })
        .then(stream => {
          this.videoElement.nativeElement.srcObject = stream;
        })
        .catch(err => {
          console.log('No se pudo conectar a la cámara!', err);
        });
    }
  }

  takePicture() {
    const canvas = this.canvas.nativeElement;
    const video = this.videoElement.nativeElement;
    const context = canvas.getContext('2d');
    if (this.photoTaken) {
      // If a photo has been taken, clear the canvas and show the video
      context.clearRect(0, 0, canvas.width, canvas.height);
      video.style.display = 'block';
      canvas.style.display = 'none';
      this.photoTaken = false;
    } else {
      // If no photo has been taken, take a photo and hide the video
      canvas.width = video.videoWidth; // Set canvas width to match video
      canvas.height = video.videoHeight; // Set canvas height to match video  
      context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      video.style.display = 'none';
      canvas.style.display = 'block';
      this.photoTaken = true;
      this.photoData = canvas.toDataURL('image/png');
    }
  }

  sendReport() {
    if (!this.photoTaken) {
      alert('Tienes que tomar una foto!');
      return;
    }
    const formData = new FormData();
    formData.append('id', String(this.cofradiaId));
    formData.append('descripcion', this.reporte);
    formData.append('tipo', this.tipo);
    formData.append('imagen', this.photoData);
    this.cuadrillasService.sendDenuncia(formData).subscribe(
      data => {
        alert('Denuncia enviada!');
        setTimeout(() => {
          this.location.back();
        }, 2000); // Wait for 2 seconds
      }
    );
  }
}
