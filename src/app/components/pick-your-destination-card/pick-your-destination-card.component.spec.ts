import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickYourDestinationCardComponent } from './pick-your-destination-card.component';

describe('PickYourDestinationCardComponent', () => {
  let component: PickYourDestinationCardComponent;
  let fixture: ComponentFixture<PickYourDestinationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickYourDestinationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickYourDestinationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
