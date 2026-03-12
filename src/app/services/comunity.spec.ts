import { TestBed } from '@angular/core/testing';

import { Comunity } from './comunity';

describe('Comunity', () => {
  let service: Comunity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Comunity);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
