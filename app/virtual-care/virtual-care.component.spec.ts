import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualCareComponent } from './virtual-care.component';

describe('VirtualCareComponent', () => {
  let component: VirtualCareComponent;
  let fixture: ComponentFixture<VirtualCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
