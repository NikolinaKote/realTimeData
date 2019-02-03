import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EventSourcePolyfill} from 'ng-event-source';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  listenForEvents(): Observable<any> {
    return Observable.create((observer) => {
      const eventSource = new EventSourcePolyfill('http://localhost:8080/api/events', {
        heartbeatTimeout: 0
      });
      eventSource.onmessage = (event) => {
        if (event.data !== 'ping') {
          observer.next(event.data);
        }
      };
      return () => {
        eventSource.close();
      };
    });
  }
}
