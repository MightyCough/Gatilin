import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeraktComponent } from './merakt.component';

describe('MeraktComponent', () => {
  let component: MeraktComponent;
  let fixture: ComponentFixture<MeraktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeraktComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeraktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
