import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechInformationComponent } from './tech-information.component';

describe('TechInformationComponent', () => {
  let component: TechInformationComponent;
  let fixture: ComponentFixture<TechInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
