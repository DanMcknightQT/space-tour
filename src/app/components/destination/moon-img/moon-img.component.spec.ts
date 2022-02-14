import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonImgComponent } from './moon-img.component';

describe('MoonImgComponent', () => {
  let component: MoonImgComponent;
  let fixture: ComponentFixture<MoonImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoonImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
