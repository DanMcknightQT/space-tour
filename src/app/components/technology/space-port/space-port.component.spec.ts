import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacePortComponent } from './space-port.component';

describe('SpacePortComponent', () => {
  let component: SpacePortComponent;
  let fixture: ComponentFixture<SpacePortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacePortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacePortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
