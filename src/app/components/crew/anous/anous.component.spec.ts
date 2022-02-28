import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnousComponent } from './anous.component';

describe('AnousComponent', () => {
  let component: AnousComponent;
  let fixture: ComponentFixture<AnousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
