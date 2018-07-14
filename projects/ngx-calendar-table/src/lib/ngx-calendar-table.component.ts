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
    const range = this.dateService.createRange(
      this.date,
      this.config.columnsNumber,
      'days'
    );
    this.columns = this.tableService.formatColumnRange(
      range,
      this.config.format
    );
  }

  public receivedDataColumns(data)
  {
    this.columns = data;
  }
}
