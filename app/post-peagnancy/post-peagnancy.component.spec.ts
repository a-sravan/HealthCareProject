import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPeagnancyComponent } from './post-peagnancy.component';

describe('PostPeagnancyComponent', () => {
  let component: PostPeagnancyComponent;
  let fixture: ComponentFixture<PostPeagnancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPeagnancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPeagnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
