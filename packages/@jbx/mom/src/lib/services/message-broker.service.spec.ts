import { TestBed } from '@angular/core/testing';

import { MessageBroker } from './message-broker.service';

describe('MessageBrokerService', () => {
  let service: MessageBroker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBroker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
