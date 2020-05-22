import { TestBed } from '@angular/core/testing';

import { RouterguardService } from './routerguard.service';

describe('RouterguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterguardService = TestBed.get(RouterguardService);
    expect(service).toBeTruthy();
  });
});
