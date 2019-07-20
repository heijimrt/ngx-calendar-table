import { Component, ViewEncapsulation } from '@angular/core';
import { CalendarConfig } from '../../projects/ngx-calendar-table/src/lib/models/calendar-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  data = [
    {
      '2018-06-21' : 'value1',
      '2018-07-22' : 'value2',
      '2018-07-23' : 'value25',
    },
    {
      '2018-07-24' : 'value3',
      '2018-07-25' : 'value5'
    },
    {
      '2018-06-23' : 'value4',
      '2018-06-26' : 'value7'
    },
    {
      '2019-02-23' : 'value4',
      '2019-01-26' : 'value7',
      '2019-01-27' : 'value8'
    },
  ];

  config: CalendarConfig = {
    frequency: 'Daily',
    columnsNumber: 3
  };

  previous() {

  }

  next() {

  }
}
