import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestaDeLosNegritosComponent } from './fiesta-de-los-negritos.component';

describe('FiestaDeLosNegritosComponent', () => {
  let component: FiestaDeLosNegritosComponent;
  let fixture: ComponentFixture<FiestaDeLosNegritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiestaDeLosNegritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiestaDeLosNegritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
