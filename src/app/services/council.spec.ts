import { TestBed } from '@angular/core/testing';

import { Council } from './council';

describe('Council', () => {
  let service: Council;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Council);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
