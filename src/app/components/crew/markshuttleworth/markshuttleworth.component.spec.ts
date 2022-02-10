import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkshuttleworthComponent } from './markshuttleworth.component';

describe('MarkshuttleworthComponent', () => {
  let component: MarkshuttleworthComponent;
  let fixture: ComponentFixture<MarkshuttleworthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkshuttleworthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkshuttleworthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
