import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictorgloverComponent } from './victorglover.component';

describe('VictorgloverComponent', () => {
  let component: VictorgloverComponent;
  let fixture: ComponentFixture<VictorgloverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictorgloverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictorgloverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
