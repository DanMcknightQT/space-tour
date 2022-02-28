import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCapComponent } from './space-cap.component';

describe('SpaceCapComponent', () => {
  let component: SpaceCapComponent;
  let fixture: ComponentFixture<SpaceCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
