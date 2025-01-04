import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalCarePalnComponent } from './clinical-care-paln.component';

describe('ClinicalCarePalnComponent', () => {
  let component: ClinicalCarePalnComponent;
  let fixture: ComponentFixture<ClinicalCarePalnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalCarePalnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalCarePalnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
