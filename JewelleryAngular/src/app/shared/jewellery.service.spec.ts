import { TestBed } from '@angular/core/testing';

import { JewelleryService } from './jewellery.service';

describe('JewelleryService', () => {
  let service: JewelleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JewelleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
