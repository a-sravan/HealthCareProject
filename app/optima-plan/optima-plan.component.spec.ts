import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimaPlanComponent } from './optima-plan.component';

describe('OptimaPlanComponent', () => {
  let component: OptimaPlanComponent;
  let fixture: ComponentFixture<OptimaPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimaPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimaPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
