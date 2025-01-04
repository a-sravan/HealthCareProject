import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuumCareComponent } from './continuum-care.component';

describe('ContinuumCareComponent', () => {
  let component: ContinuumCareComponent;
  let fixture: ComponentFixture<ContinuumCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuumCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuumCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
