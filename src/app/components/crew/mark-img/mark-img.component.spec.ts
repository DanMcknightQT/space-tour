import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkImgComponent } from './mark-img.component';

describe('MarkImgComponent', () => {
  let component: MarkImgComponent;
  let fixture: ComponentFixture<MarkImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
