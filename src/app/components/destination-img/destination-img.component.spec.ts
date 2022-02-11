import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationImgComponent } from './destination-img.component';

describe('DestinationImgComponent', () => {
  let component: DestinationImgComponent;
  let fixture: ComponentFixture<DestinationImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
