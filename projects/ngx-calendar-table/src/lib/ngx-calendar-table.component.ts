import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

import { DateService } from '../services/date/date.service';
import { Column } from './models/Column';
import { NgxCalendarTableService } from './ngx-calendar-table.service';
import { NgxCalendarTableContentDirective } from './directives/ngx-calendar-table-content.directive';
import { Config } from './models/Config';

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
  @Input() public date: Date;
  @Input() public config: Config;
  @ContentChild(NgxCalendarTableContentDirective, { read: TemplateRef })
    public tableContentDirective;

  constructor(
    private tableService: NgxCalendarTableService,
    private dateService: DateService
  ) { }

  ngOnInit()
  {
    this.rowIdentificator();
    this.populateColumns();
  }

  rowIdentificator()
  {
    this.rows = this.rows.map(row => {
      Object.keys(row).map(key => {
        row[this.dateService.format(
          key,
          this.tableService.formatDateColumn(
            this.config.frequency,
            this.config.format
          ))] = row[key];
      });
      return row;
    });
  }

  /**
   * Build and populate columns
   */
  private populateColumns()
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
  public receivedDataColumns(data)
  {
    this.columns = data;
  }
}
