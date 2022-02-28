import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropaImgComponent } from './europa-img.component';

describe('EuropaImgComponent', () => {
  let component: EuropaImgComponent;
  let fixture: ComponentFixture<EuropaImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropaImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
