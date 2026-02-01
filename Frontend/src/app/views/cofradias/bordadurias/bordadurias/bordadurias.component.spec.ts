import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordaduriasComponent } from './bordadurias.component';

describe('BordaduriasComponent', () => {
  let component: BordaduriasComponent;
  let fixture: ComponentFixture<BordaduriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BordaduriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BordaduriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
