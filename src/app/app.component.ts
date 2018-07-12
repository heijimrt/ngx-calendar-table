import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  data = [
    { '2018-06-21' : 'value', '2018-06-22': 'another-value' },
    { '2018-06-21' : 'value2' },
  ];

  dateFormat = {
    date : 'DD/MM/YYYY'
  };
}
