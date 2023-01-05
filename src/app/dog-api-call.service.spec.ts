import { TestBed } from '@angular/core/testing';

import { DogApiCallService } from './dog-api-call.service';

describe('DogApiCallService', () => {
  let service: DogApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
