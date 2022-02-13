import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderBtnComponent } from './slider-btn.component';

describe('SliderBtnComponent', () => {
  let component: SliderBtnComponent;
  let fixture: ComponentFixture<SliderBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
