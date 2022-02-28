import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchImgComponent } from './launch-img.component';

describe('LaunchImgComponent', () => {
  let component: LaunchImgComponent;
  let fixture: ComponentFixture<LaunchImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
