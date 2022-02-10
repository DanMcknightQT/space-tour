import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorebuttonComponent } from './explorebutton.component';

describe('ExplorebuttonComponent', () => {
  let component: ExplorebuttonComponent;
  let fixture: ComponentFixture<ExplorebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
