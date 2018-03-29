import { TestBed, inject } from '@angular/core/testing';

import { NameBarService } from './name-bar.service';

describe('NameBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameBarService]
    });
  });

  it('should be created', inject([NameBarService], (service: NameBarService) => {
    expect(service).toBeTruthy();
  }));
});
