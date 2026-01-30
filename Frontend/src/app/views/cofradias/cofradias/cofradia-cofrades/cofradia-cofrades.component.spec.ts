import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofradiaCofradesComponent } from './cofradia-cofrades.component';

describe('CofradiaCofradesComponent', () => {
  let component: CofradiaCofradesComponent;
  let fixture: ComponentFixture<CofradiaCofradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CofradiaCofradesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CofradiaCofradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
