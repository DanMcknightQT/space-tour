import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceImgComponent } from './space-img.component';

describe('SpaceImgComponent', () => {
  let component: SpaceImgComponent;
  let fixture: ComponentFixture<SpaceImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
