import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DateService } from '../../services/date/date.service';
import { Column } from '../models/Column';

@Component({
  selector: 'ngx-calendar-table-controls',
  templateUrl: './ngx-calendar-table-controls.component.html',
  styleUrls: ['./ngx-calendar-table-controls.component.css'],
  host: { class: 'ngx-table-controls' }
})
export class NgxCalendarTableControlsComponent
{
  @Input() columns: Column[];
  @Output() notifierData = new EventEmitter();

  constructor(private dateService: DateService) { }

  /**
   * Decide if control is next or previous based on received value
   * 
   * @param value 
   */
  public controls(value: boolean)
  {
    if (value) {
      this.next();
      return;
    }
    this.previous();
  }

  /**
   * Add date based last current column and create a new range
   */
  private next()
  {
    const date = this.dateService.add(this.getLastColumn().field, 2, 'days');
    const ranges = this.dateService.createRange(date.toDate(), 2, 'days');
    this.notifierData.emit(this.formatColumnRange(ranges));
  }

  /**
   * Subtract date based first current column and create a new range
   */
  private previous()
  {
    const sub = this.dateService.sub(this.getFirstColumn().field, 2, 'days');
    const subRanges = this.dateService.createRange(sub.toDate(), 2, 'days');
    this.notifierData.emit(this.formatColumnRange(subRanges));
  }

  /**
   * Receive a range of dates to format as column
   * 
   * @param ranges 
   */
  public formatColumnRange(ranges)
  {
    return ranges.map(
      (range) => new Column(
        this.dateService.format(range, 'YYYY-MM-DD'),
        this.dateService.format(range, 'YYYY-MM-DD')
      ));
  }

  /**
   * Get first column of columns
   */
  public getFirstColumn()
  {
    return this.columns[0];
  }

  /**
   * Get last column of columns
   */
  public getLastColumn()
  {
    return this.columns[this.columns.length - 1];
  }
}
