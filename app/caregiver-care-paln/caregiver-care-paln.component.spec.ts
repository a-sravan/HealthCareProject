import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverCarePalnComponent } from './caregiver-care-paln.component';

describe('CaregiverCarePalnComponent', () => {
  let component: CaregiverCarePalnComponent;
  let fixture: ComponentFixture<CaregiverCarePalnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaregiverCarePalnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiverCarePalnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
