import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyPalnSecondComponent } from './pregnancy-paln-second.component';

describe('PregnancyPalnSecondComponent', () => {
  let component: PregnancyPalnSecondComponent;
  let fixture: ComponentFixture<PregnancyPalnSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregnancyPalnSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnancyPalnSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
