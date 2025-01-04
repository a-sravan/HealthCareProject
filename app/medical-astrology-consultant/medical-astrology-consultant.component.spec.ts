import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAstrologyConsultantComponent } from './medical-astrology-consultant.component';

describe('MedicalAstrologyConsultantComponent', () => {
  let component: MedicalAstrologyConsultantComponent;
  let fixture: ComponentFixture<MedicalAstrologyConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAstrologyConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAstrologyConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
