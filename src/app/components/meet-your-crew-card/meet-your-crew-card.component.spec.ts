import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetYourCrewCardComponent } from './meet-your-crew-card.component';

describe('MeetYourCrewCardComponent', () => {
  let component: MeetYourCrewCardComponent;
  let fixture: ComponentFixture<MeetYourCrewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetYourCrewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetYourCrewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
