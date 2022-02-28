import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPictureComponent } from './tech-picture.component';

describe('TechPictureComponent', () => {
  let component: TechPictureComponent;
  let fixture: ComponentFixture<TechPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
