import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyPalnThirdComponent } from './pregnancy-paln-third.component';

describe('PregnancyPalnThirdComponent', () => {
  let component: PregnancyPalnThirdComponent;
  let fixture: ComponentFixture<PregnancyPalnThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregnancyPalnThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnancyPalnThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
