import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetPictureComponent } from './planet-picture.component';

describe('PlanetPictureComponent', () => {
  let component: PlanetPictureComponent;
  let fixture: ComponentFixture<PlanetPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
