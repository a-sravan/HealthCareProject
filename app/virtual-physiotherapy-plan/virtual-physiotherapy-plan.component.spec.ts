import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualPhysiotherapyPlanComponent } from './virtual-physiotherapy-plan.component';

describe('VirtualPhysiotherapyPlanComponent', () => {
  let component: VirtualPhysiotherapyPlanComponent;
  let fixture: ComponentFixture<VirtualPhysiotherapyPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualPhysiotherapyPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualPhysiotherapyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
