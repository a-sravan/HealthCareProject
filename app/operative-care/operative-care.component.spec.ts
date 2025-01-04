import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperativeCareComponent } from './operative-care.component';

describe('OperativeCareComponent', () => {
  let component: OperativeCareComponent;
  let fixture: ComponentFixture<OperativeCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperativeCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperativeCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
