import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewInformationComponent } from './crew-information.component';

describe('CrewInformationComponent', () => {
  let component: CrewInformationComponent;
  let fixture: ComponentFixture<CrewInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
