import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCarePalnComponent } from './virtual-care-paln.component';

describe('VirtualCarePalnComponent', () => {
  let component: VirtualCarePalnComponent;
  let fixture: ComponentFixture<VirtualCarePalnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCarePalnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualCarePalnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
