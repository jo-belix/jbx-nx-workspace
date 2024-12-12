import { TestBed } from '@angular/core/testing';

import { MessageBrokerService } from './message-broker.service';

describe('MessageBrokerService', () => {
  let service: MessageBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
