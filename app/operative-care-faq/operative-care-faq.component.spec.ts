import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativeCareFaqComponent } from './operative-care-faq.component';

describe('OperativeCareFaqComponent', () => {
  let component: OperativeCareFaqComponent;
  let fixture: ComponentFixture<OperativeCareFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperativeCareFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativeCareFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
