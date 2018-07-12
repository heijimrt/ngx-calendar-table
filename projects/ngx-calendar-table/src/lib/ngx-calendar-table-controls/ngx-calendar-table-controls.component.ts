import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DateService } from '../../services/date/date.service';
import { Column } from '../models/Column';
import { NgxCalendarTableService } from '../ngx-calendar-table.service';

@Component({
  selector: 'ngx-calendar-table-controls',
  templateUrl: './ngx-calendar-table-controls.component.html',
  styleUrls: ['./ngx-calendar-table-controls.component.css'],
  host: { class: 'ngx-table-controls' }
})
export class NgxCalendarTableControlsComponent
{
  @Input() columns: Column[];
  @Input() format: Object = {};
  @Output() notifierData = new EventEmitter();

  constructor(
    private tableService: NgxCalendarTableService,
    private dateService: DateService
  ) { }

  /**
   * Decide if control is next or previous based on received value
   * 
   * @param value 
   */
  public controls(value: boolean)
  {
    (value) ? this.next() : this.previous();
  }

  /**
   * Add date based last current column and create a new range
   */
  private next()
  {
    const date = this.dateService.add(this.getLastColumn().field, 2, 'days');
    const ranges = this.dateService.createRange(date.toDate(), 2, 'days');
    this.notifierData.emit(
      this.tableService.formatColumnRange(ranges, this.format)
    );
  }

  /**
   * Subtract date based first current column and create a new range
   */
  private previous()
  {
    const sub = this.dateService.sub(this.getFirstColumn().field, 2, 'days');
    const subRanges = this.dateService.createRange(sub.toDate(), 2, 'days');
    this.notifierData.emit(
      this.tableService.formatColumnRange(subRanges, this.format)
    );
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
