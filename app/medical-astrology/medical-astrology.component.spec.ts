import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAstrologyComponent } from './medical-astrology.component';

describe('MedicalAstrologyComponent', () => {
  let component: MedicalAstrologyComponent;
  let fixture: ComponentFixture<MedicalAstrologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAstrologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAstrologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
