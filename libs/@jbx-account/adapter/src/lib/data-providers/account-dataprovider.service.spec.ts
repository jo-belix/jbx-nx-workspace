import { TestBed } from '@angular/core/testing';

import { AccountDataproviderService } from './account-dataprovider.service';

describe('AccountDataproviderService', () => {
  let service: AccountDataproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountDataproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
