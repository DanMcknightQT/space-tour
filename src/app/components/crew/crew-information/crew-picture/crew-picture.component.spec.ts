import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewPictureComponent } from './crew-picture.component';

describe('CrewPictureComponent', () => {
  let component: CrewPictureComponent;
  let fixture: ComponentFixture<CrewPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
