import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComingsoonComponent } from './service-comingsoon.component';

describe('ServiceComingsoonComponent', () => {
  let component: ServiceComingsoonComponent;
  let fixture: ComponentFixture<ServiceComingsoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceComingsoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComingsoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
