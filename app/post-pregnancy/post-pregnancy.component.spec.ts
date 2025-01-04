import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPregnancyComponent } from './post-pregnancy.component';

describe('PostPregnancyComponent', () => {
  let component: PostPregnancyComponent;
  let fixture: ComponentFixture<PostPregnancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPregnancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPregnancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
