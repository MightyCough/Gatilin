import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofradesComponent } from './cofrades.component';

describe('CofradesComponent', () => {
  let component: CofradesComponent;
  let fixture: ComponentFixture<CofradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CofradesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CofradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
