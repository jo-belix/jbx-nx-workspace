import { TestBed } from '@angular/core/testing';

import { AccountMapperService } from './account-mapper.service';

describe('AccountMapperService', () => {
  let service: AccountMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
