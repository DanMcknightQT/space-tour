import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsImgComponent } from './mars-img.component';

describe('MarsImgComponent', () => {
  let component: MarsImgComponent;
  let fixture: ComponentFixture<MarsImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
