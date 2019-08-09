import { TestBed } from '@angular/core/testing';

import { OrigemApiService } from './origem-api.service';

describe('OrigemApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrigemApiService = TestBed.get(OrigemApiService);
    expect(service).toBeTruthy();
  });
});
