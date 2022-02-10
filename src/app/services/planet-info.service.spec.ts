import { TestBed } from '@angular/core/testing';

import { PlanetInfoService } from './planet-info.service';

describe('PlanetInfoService', () => {
  let service: PlanetInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
