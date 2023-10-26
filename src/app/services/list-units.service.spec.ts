import { TestBed } from '@angular/core/testing';

import { ListUnitsService } from './list-units.service';

describe('ListUnitsService', () => {
  let service: ListUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
