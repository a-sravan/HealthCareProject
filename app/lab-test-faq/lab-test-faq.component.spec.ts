import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestFaqComponent } from './lab-test-faq.component';

describe('LabTestFaqComponent', () => {
  let component: LabTestFaqComponent;
  let fixture: ComponentFixture<LabTestFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabTestFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTestFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
