import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PragnancyCareComponent } from './pragnancy-care.component';

describe('PragnancyCareComponent', () => {
  let component: PragnancyCareComponent;
  let fixture: ComponentFixture<PragnancyCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PragnancyCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PragnancyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
