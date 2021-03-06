import {Component} from '@angular/core';
import {EventService} from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: any[] = [];

  constructor(private eventService: EventService) {
    this.listenEvents();
  }

  private listenEvents() {
    this.eventService.listenForEvents()
      .subscribe(value => {
       this.data.push(value);
      });
  }
}
