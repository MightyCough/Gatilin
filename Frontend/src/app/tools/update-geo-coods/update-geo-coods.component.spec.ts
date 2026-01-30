import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGeoCoodsComponent } from './update-geo-coods.component';

describe('UpdateGeoCoodsComponent', () => {
  let component: UpdateGeoCoodsComponent;
  let fixture: ComponentFixture<UpdateGeoCoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateGeoCoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateGeoCoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
