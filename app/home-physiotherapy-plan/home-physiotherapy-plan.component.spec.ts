import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhysiotherapyPlanComponent } from './home-physiotherapy-plan.component';

describe('HomePhysiotherapyPlanComponent', () => {
  let component: HomePhysiotherapyPlanComponent;
  let fixture: ComponentFixture<HomePhysiotherapyPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePhysiotherapyPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhysiotherapyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
