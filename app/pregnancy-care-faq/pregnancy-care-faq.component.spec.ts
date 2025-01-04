import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyCareFaqComponent } from './pregnancy-care-faq.component';

describe('PregnancyCareFaqComponent', () => {
  let component: PregnancyCareFaqComponent;
  let fixture: ComponentFixture<PregnancyCareFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregnancyCareFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnancyCareFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
