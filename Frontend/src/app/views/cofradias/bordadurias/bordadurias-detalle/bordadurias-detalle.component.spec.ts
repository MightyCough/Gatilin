import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordaduriasDetalleComponent } from './bordadurias-detalle.component';

describe('BordaduriasDetalleComponent', () => {
  let component: BordaduriasDetalleComponent;
  let fixture: ComponentFixture<BordaduriasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BordaduriasDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BordaduriasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
