import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavidadComponent } from './navidad.component';

describe('NavidadComponent', () => {
  let component: NavidadComponent;
  let fixture: ComponentFixture<NavidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
