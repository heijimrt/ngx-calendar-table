import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../services/date/date.service';
import { Column } from './models/Column';

@Component({
  selector: 'ngx-calendar-table',
  templateUrl: './ngx-calendar-table.component.html',
  styleUrls: ['./ngx-calendar-table.style.css'],
  host: { class: 'ngx-calendar-content-table' }
})
export class NgxCalendarTableComponent implements OnInit
{
  public columns: Column[];
  @Input() public rows: any[];
  @Input() public date: Date;
  @Input() public format: Object = {};

  constructor(public dateService: DateService) { }

  ngOnInit()
  {
    this.date = new Date();
    const range = this.dateService.createRange(this.date, 2, 'days');
    this.columns = this.formatColumnRange(range);
  }

  public formatColumnRange(ranges)
  {
    return ranges.map(
      (range) => new Column(
        this.dateService.format(range, 'YYYY-MM-DD'),
        this.dateService.format(range, this.formatDateColumn())
      ));
  }

  public receivedDataColumns(data)
  {
    this.columns = data;
  }

  private formatDateColumn()
  {
    if (this.format.hasOwnProperty('date')) {
      return this.format['date'];
    }
    return 'YYYY-MM-DD';
  }
}
