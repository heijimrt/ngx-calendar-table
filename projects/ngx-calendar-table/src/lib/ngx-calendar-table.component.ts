import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

import { DateService } from '../services/date/date.service';
import { Column } from './models/Column';
import { NgxCalendarTableService } from './ngx-calendar-table.service';
import { NgxCalendarTableContentDirective } from './directives/ngx-calendar-table-content.directive';
import { Config } from './models/Config';
import * as _ from 'lodash';

@Component({
  selector: 'ngx-calendar-table',
  templateUrl: './ngx-calendar-table.component.html',
  styleUrls: ['./ngx-calendar-table.style.scss'],
  host: { class: 'ngx-calendar-content-table' }
})
export class NgxCalendarTableComponent implements OnInit
{
  public columns: Column[];
  @Input() public rows: any[];
  @Input() public date: Date = new Date();
  @Input() public config: Config;
  @Input() public controls: Object = { previous: 'previous', next: 'next' };
  @ContentChild(
    NgxCalendarTableContentDirective,
    { read: TemplateRef }
  ) public tableContentDirective;

  constructor(
    private tableService: NgxCalendarTableService,
    private dateService: DateService
  ) { }

  ngOnInit()
  {
    this.tableService.manipulateRows(
      this.rows,
      this.config.frequency
    );
    this.populateColumns();
  }

  /**
   * Build and populate columns
   */
  private populateColumns(): void
  {
    this.columns = this.tableService.buildColumns(
      this.date,
      this.config.columnsNumber,
      this.config.frequency,
      this.config.format
    );
  }

  /**
   * Receive data columns by event emitter
   */
  public receivedDataColumns(data): void
  {
    this.columns = data;
  }

  private receiveFrequency(event)
  {

    // working on this implementation

    // this.config = {
    //   frequency : event.target.value,
    //   columnsNumber: 2,
    //   format: 'DD/MM/YYYY'
    // };

    // this.tableService.manipulateRows(
    //   this.rows,
    //   this.config.frequency
    // );
    // this.populateColumns();
  }
}
