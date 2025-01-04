import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorConsultantFaqComponent } from './doctor-consultant-faq.component';

describe('DoctorConsultantFaqComponent', () => {
  let component: DoctorConsultantFaqComponent;
  let fixture: ComponentFixture<DoctorConsultantFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorConsultantFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorConsultantFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
