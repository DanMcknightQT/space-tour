import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewImgComponent } from './crew-img.component';

describe('CrewImgComponent', () => {
  let component: CrewImgComponent;
  let fixture: ComponentFixture<CrewImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
