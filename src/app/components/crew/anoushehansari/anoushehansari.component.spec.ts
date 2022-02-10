import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnoushehansariComponent } from './anoushehansari.component';

describe('AnoushehansariComponent', () => {
  let component: AnoushehansariComponent;
  let fixture: ComponentFixture<AnoushehansariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnoushehansariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnoushehansariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
