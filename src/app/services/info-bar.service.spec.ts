import { TestBed, inject } from '@angular/core/testing';

import { InfoBarService } from './info-bar.service';

describe('InfoBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoBarService]
    });
  });

  it('should be created', inject([InfoBarService], (service: InfoBarService) => {
    expect(service).toBeTruthy();
  }));
});
