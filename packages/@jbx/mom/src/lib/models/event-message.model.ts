import { EventMessageBase } from './event-message-base.model';

export abstract class EventMessage<T> extends EventMessageBase {
  constructor(id: string, parameter?: T) {
    super(id, parameter);
  }
}
