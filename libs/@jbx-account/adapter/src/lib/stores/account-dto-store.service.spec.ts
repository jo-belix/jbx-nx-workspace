import { TestBed } from '@angular/core/testing';

import { AccountDtoStoreService } from './account-dto-store.service';

describe('AccountDtoStoreService', () => {
  let service: AccountDtoStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountDtoStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
