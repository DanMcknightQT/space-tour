import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCapImgComponent } from './space-cap-img.component';

describe('SpaceCapImgComponent', () => {
  let component: SpaceCapImgComponent;
  let fixture: ComponentFixture<SpaceCapImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceCapImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceCapImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
