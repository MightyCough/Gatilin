import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGeoCoordsComponent } from './get-geo-coords.component';

describe('GetGeoCoordsComponent', () => {
  let component: GetGeoCoordsComponent;
  let fixture: ComponentFixture<GetGeoCoordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetGeoCoordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetGeoCoordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
