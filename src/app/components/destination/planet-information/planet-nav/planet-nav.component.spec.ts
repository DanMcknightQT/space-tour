import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetNavComponent } from './planet-nav.component';

describe('PlanetNavComponent', () => {
  let component: PlanetNavComponent;
  let fixture: ComponentFixture<PlanetNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
