import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlsTrainingComponent } from './bls-training.component';

describe('BlsTrainingComponent', () => {
  let component: BlsTrainingComponent;
  let fixture: ComponentFixture<BlsTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlsTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
