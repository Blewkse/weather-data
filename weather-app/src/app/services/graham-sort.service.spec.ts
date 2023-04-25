import { TestBed } from '@angular/core/testing';

import { GrahamSortService } from './graham-sort.service';

describe('GrahamSortService', () => {
  let service: GrahamSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrahamSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
