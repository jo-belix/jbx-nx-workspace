import { TestBed } from '@angular/core/testing';

import { AccountHttpClient } from './account-http-client.service';

describe('AccountHttpClient', () => {
  let service: AccountHttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
