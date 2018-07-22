import { Component, ViewEncapsulation } from '@angular/core';
import { Config } from '../../projects/ngx-calendar-table/src/lib/models/Config';

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
      '2018-06-22' : 'value2',
    },
    {
      '2018-06-24' : 'value3',
      '2018-06-25' : 'value5'
    },
    {
      '2018-06-23' : 'value4',
      '2018-06-26' : 'value7'
    },
  ];

  config: Config = {
    frequency: 'days',
    format: 'DD/MM/YYYY',
    columnsNumber: 3
  };

  labelControl = {
    previous : 'Back',
    next     : 'Next!'
  };
}
