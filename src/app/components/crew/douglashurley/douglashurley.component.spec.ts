import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DouglashurleyComponent } from './douglashurley.component';

describe('DouglashurleyComponent', () => {
  let component: DouglashurleyComponent;
  let fixture: ComponentFixture<DouglashurleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DouglashurleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DouglashurleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
