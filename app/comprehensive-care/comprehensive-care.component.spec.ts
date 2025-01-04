import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprehensiveCareComponent } from './comprehensive-care.component';

describe('ComprehensiveCareComponent', () => {
  let component: ComprehensiveCareComponent;
  let fixture: ComponentFixture<ComprehensiveCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprehensiveCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprehensiveCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
