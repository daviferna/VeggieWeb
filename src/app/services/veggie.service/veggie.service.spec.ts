import { TestBed } from '@angular/core/testing';

import { VeggieService } from './veggie.service';

describe('VeggieService', () => {
  let service: VeggieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeggieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
