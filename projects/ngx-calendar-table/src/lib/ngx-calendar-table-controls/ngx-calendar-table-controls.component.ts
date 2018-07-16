import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DateService } from '../../services/date/date.service';
import { Column } from '../models/Column';
import { NgxCalendarTableService } from '../ngx-calendar-table.service';
import { Config } from '../models/Config';

@Component({
  selector: 'ngx-calendar-table-controls',
  templateUrl: './ngx-calendar-table-controls.component.html',
  styleUrls: ['./ngx-calendar-table-controls.component.css'],
  host: { class: 'ngx-table-controls' }
})
export class NgxCalendarTableControlsComponent
{
  @Input() columns: Column[];
  @Input() config: Config;
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
  private next(): void
  {
    const added = this.dateService.add(
      this.getLastColumn().field,
      this.config.columnsNumber,
      this.config.frequency
    );
    this.buildColumnsToEmit(added);
  }

  /**
   * Subtract date based first current column and create a new range
   */
  private previous(): void
  {
    const sub = this.dateService.sub(
      this.getFirstColumn().field,
      this.config.columnsNumber,
      this.config.frequency
    );
    this.buildColumnsToEmit(sub);
  }

  /**
   * Create new range of columns to emit
   *
   * @param operation
   */
  private buildColumnsToEmit(operation): void
  {
    const columns = this.tableService.buildColumns(
      operation.toDate(),
      this.config.columnsNumber,
      this.config.frequency,
      this.config.format
    );
    this.notifierData.emit(columns);
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
