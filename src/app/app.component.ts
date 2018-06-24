import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
    { '2018-06-21' : 'value', '2018-06-22': 'another-value' },
    { '2018-06-21' : 'value2' },
  ];
}
