import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnousImgComponent } from './anous-img.component';

describe('AnousImgComponent', () => {
  let component: AnousImgComponent;
  let fixture: ComponentFixture<AnousImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnousImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnousImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
