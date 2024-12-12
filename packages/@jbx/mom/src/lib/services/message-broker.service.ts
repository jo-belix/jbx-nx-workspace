import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject, filter, map, first } from 'rxjs';
import { Constructor } from '../models/constructor.model';
import { EventMessageBase } from '../models/event-message-base.model';

@Injectable({
  providedIn: 'root',
})
export class MessageBrokerService {
  private readonly eventMessageSendedSubject: Subject<EventMessageBase> =
    new Subject<EventMessageBase>();
  public eventMessageSended$: Observable<EventMessageBase> =
    this.eventMessageSendedSubject.asObservable();

  public sendEventMessage(eventMessage: EventMessageBase): void {
    if (isDevMode()) {
      console.log(
        `Event : ${eventMessage.id} ${
          eventMessage.parameter
            ? ': ' + JSON.stringify(eventMessage.parameter)
            : ''
        }`
      );
    }
    this.eventMessageSendedSubject.next(eventMessage);
  }

  public onEventMessageSended<T extends EventMessageBase>(
    filterType: Constructor<T>
  ): Observable<T> {
    return this.eventMessageSended$.pipe(
      filter((x) => x instanceof filterType),
      map((x) => x as T)
    );
  }

  public onFirstEventMessageSended<T extends EventMessageBase>(
    filterType: Constructor<T>
  ): Observable<T> {
    return this.eventMessageSended$.pipe(
      first((x) => x instanceof filterType),
      map((x) => x as T)
    );
  }
}
