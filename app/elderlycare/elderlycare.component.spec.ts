import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderlycareComponent } from './elderlycare.component';

describe('ElderlycareComponent', () => {
  let component: ElderlycareComponent;
  let fixture: ComponentFixture<ElderlycareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElderlycareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderlycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
