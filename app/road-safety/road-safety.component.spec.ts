import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadSafetyComponent } from './road-safety.component';

describe('RoadSafetyComponent', () => {
  let component: RoadSafetyComponent;
  let fixture: ComponentFixture<RoadSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
