import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitanImgComponent } from './titan-img.component';

describe('TitanImgComponent', () => {
  let component: TitanImgComponent;
  let fixture: ComponentFixture<TitanImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitanImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitanImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
