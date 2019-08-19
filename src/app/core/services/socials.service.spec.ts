import { TestBed } from '@angular/core/testing';

import { SocialsService } from './socials.service';

describe('SocialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialsService = TestBed.get(SocialsService);
    expect(service).toBeTruthy();
  });
});
