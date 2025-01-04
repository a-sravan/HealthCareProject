import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhousePatientCareComponent } from './inhouse-patient-care.component';

describe('InhousePatientCareComponent', () => {
  let component: InhousePatientCareComponent;
  let fixture: ComponentFixture<InhousePatientCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhousePatientCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InhousePatientCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
