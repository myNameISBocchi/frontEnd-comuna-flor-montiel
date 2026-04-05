import { TestBed } from '@angular/core/testing';

import { Committee } from './committee';

describe('Committee', () => {
  let service: Committee;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Committee);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
