import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlyCareFaqComponent } from './elderly-care-faq.component';

describe('ElderlyCareFaqComponent', () => {
  let component: ElderlyCareFaqComponent;
  let fixture: ComponentFixture<ElderlyCareFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElderlyCareFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlyCareFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
