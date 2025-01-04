import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnancyPalnFirstComponent } from './pregnancy-paln-first.component';

describe('PregnancyPalnFirstComponent', () => {
  let component: PregnancyPalnFirstComponent;
  let fixture: ComponentFixture<PregnancyPalnFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregnancyPalnFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnancyPalnFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
