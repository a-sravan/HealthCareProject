import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseasServicesComponent } from './overseas-services.component';

describe('OverseasServicesComponent', () => {
  let component: OverseasServicesComponent;
  let fixture: ComponentFixture<OverseasServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverseasServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverseasServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
