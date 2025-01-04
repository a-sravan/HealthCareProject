import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiotheraphyComponent } from './physiotheraphy.component';

describe('PhysiotheraphyComponent', () => {
  let component: PhysiotheraphyComponent;
  let fixture: ComponentFixture<PhysiotheraphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysiotheraphyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiotheraphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
