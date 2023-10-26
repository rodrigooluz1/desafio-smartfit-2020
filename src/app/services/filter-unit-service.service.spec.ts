import { TestBed } from '@angular/core/testing';

import { FilterUnitServiceService } from './filter-unit-service.service';

describe('FilterUnitServiceService', () => {
  let service: FilterUnitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterUnitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
