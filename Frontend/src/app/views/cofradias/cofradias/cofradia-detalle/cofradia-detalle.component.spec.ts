import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofradiaDetalleComponent } from './cofradia-detalle.component';

describe('CofradiaDetalleComponent', () => {
  let component: CofradiaDetalleComponent;
  let fixture: ComponentFixture<CofradiaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CofradiaDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CofradiaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
