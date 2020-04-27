import { TestBed } from '@angular/core/testing';

import { GlobalinterceptorService } from './globalinterceptor.service';

describe('GlobalinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalinterceptorService = TestBed.get(GlobalinterceptorService);
    expect(service).toBeTruthy();
  });
});
