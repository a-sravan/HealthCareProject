import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralWellnessComponent } from './general-wellness.component';

describe('GeneralWellnessComponent', () => {
  let component: GeneralWellnessComponent;
  let fixture: ComponentFixture<GeneralWellnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralWellnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralWellnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
