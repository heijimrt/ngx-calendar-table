import { Component, ViewEncapsulation } from '@angular/core';
import { Config } from '../../projects/ngx-calendar-table/src/lib/models/Config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  date = new Date(2018, 11, 24);

  data = [
    { '2018-06-21' : 'value', '2018-06-22': 'another-value' },
    { '2018-06-24' : 'value2' },
    { '2018-06-23' : 'value2' },
    { '2018-06-25' : 'value2' },
    { '2018-06-26' : 'value2' },
    { '2018-06-27' : 'value2' },
    { '2018-06-28' : 'value2' },
    { '2018-06-29' : 'value2' },
    { '2018-06-30' : 'value2' },
    { '2018-07-01' : 'value2' },
    { '2018-07-02' : 'value2' },
  ];

  config: Config = {
    format : {
      date : 'DD/MM/YYYY'
    },
    columnsNumber: 5
  };
}
