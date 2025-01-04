import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalSafetyComponent } from './electrical-safety.component';

describe('ElectricalSafetyComponent', () => {
  let component: ElectricalSafetyComponent;
  let fixture: ComponentFixture<ElectricalSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricalSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
