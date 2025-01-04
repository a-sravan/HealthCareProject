import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionCareComponent } from './companion-care.component';

describe('CompanionCareComponent', () => {
  let component: CompanionCareComponent;
  let fixture: ComponentFixture<CompanionCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanionCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
