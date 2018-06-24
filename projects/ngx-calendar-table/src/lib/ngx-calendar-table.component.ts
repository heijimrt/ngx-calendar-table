import { Component, OnInit, Input } from '@angular/core';
import { DateService } from '../date/date.service';
import { Column } from './models/Column';

@Component({
  selector: 'ngx-calendar-table',
  templateUrl: './ngx-calendar-table.component.html',
  styleUrls: ['./ngx-calendar-table.style.css']
})
export class NgxCalendarTableComponent implements OnInit
{
  public columns: Column[];
  @Input() public rows: any[];
  @Input() public date: Date;

  constructor(public dateService: DateService) { }

  ngOnInit()
  {
    this.date = new Date();
    const range = this.dateService.createRange(this.date, 2, 'days');
    this.columns = this.formatColumnRange(range);
  }

  public controls(value: boolean)
  {
    if (value) {
      const date = this.dateService.add(this.getLastColumn().value, 2, 'days');
      const ranges = this.dateService.createRange(date.toDate(), 2, 'days');
      this.columns = this.formatColumnRange(ranges);
      return;
    }
    const sub = this.dateService.sub(this.getFirstColumn().value, 2, 'days');
    const subRanges = this.dateService.createRange(sub.toDate(), 2, 'days');
    this.columns = this.formatColumnRange(subRanges);
  }

  public formatColumnRange(ranges)
  {
    return ranges.map(
      (range) => new Column(
        this.dateService.format(range, 'YYYY-MM-DD'),
        this.dateService.format(range, 'YYYY-MM-DD')
      ));
  }

  public getFirstColumn()
  {
    return this.columns[0];
  }

  public getLastColumn()
  {
    return this.columns[this.columns.length - 1];
  }
}
