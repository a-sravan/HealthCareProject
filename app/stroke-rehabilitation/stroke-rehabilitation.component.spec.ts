import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrokeRehabilitationComponent } from './stroke-rehabilitation.component';

describe('StrokeRehabilitationComponent', () => {
  let component: StrokeRehabilitationComponent;
  let fixture: ComponentFixture<StrokeRehabilitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrokeRehabilitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrokeRehabilitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
