import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAstrologyFaqComponent } from './medical-astrology-faq.component';

describe('MedicalAstrologyFaqComponent', () => {
  let component: MedicalAstrologyFaqComponent;
  let fixture: ComponentFixture<MedicalAstrologyFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalAstrologyFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAstrologyFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
