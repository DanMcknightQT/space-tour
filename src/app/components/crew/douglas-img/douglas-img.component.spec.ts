import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DouglasImgComponent } from './douglas-img.component';

describe('DouglasImgComponent', () => {
  let component: DouglasImgComponent;
  let fixture: ComponentFixture<DouglasImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DouglasImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DouglasImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
