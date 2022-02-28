import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchVehicleComponent } from './launch-vehicle.component';

describe('LaunchVehicleComponent', () => {
  let component: LaunchVehicleComponent;
  let fixture: ComponentFixture<LaunchVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
