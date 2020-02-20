import { TestBed } from '@angular/core/testing';

import { HotelcheckinService } from './hotelcheckin.service';

describe('HotelcheckinService', () => {
  let service: HotelcheckinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelcheckinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
