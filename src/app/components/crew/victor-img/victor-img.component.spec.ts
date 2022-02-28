import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VictorImgComponent } from './victor-img.component';

describe('VictorImgComponent', () => {
  let component: VictorImgComponent;
  let fixture: ComponentFixture<VictorImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VictorImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VictorImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
