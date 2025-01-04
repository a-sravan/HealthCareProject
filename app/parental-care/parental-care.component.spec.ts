import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentalCareComponent } from './parental-care.component';

describe('ParentalCareComponent', () => {
  let component: ParentalCareComponent;
  let fixture: ComponentFixture<ParentalCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentalCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentalCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
