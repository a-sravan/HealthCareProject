import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlsFaqComponent } from './bls-faq.component';

describe('BlsFaqComponent', () => {
  let component: BlsFaqComponent;
  let fixture: ComponentFixture<BlsFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlsFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlsFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
