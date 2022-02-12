import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewInfoComponent } from './crew-info.component';

describe('CrewInfoComponent', () => {
  let component: CrewInfoComponent;
  let fixture: ComponentFixture<CrewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
