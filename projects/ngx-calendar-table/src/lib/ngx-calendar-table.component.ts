import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

import { DateService } from '../services/date/date.service';
import { Column } from './models/Column';
import { NgxCalendarTableService } from './ngx-calendar-table.service';
import { NgxCalendarTableContentDirective } from './directives/ngx-calendar-table-content.directive';

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
  @Input() public format: Object = {};
  @ContentChild(NgxCalendarTableContentDirective, { read: TemplateRef })
    private tableContentDirective;

  constructor(
    private tableService: NgxCalendarTableService,
    private dateService: DateService
  ) { }

  ngOnInit()
  {
    this.date = new Date();
    const range = this.dateService.createRange(this.date, 2, 'days');
    this.columns = this.tableService.formatColumnRange(range, this.format);
  }

  public receivedDataColumns(data)
  {
    this.columns = data;
  }
}
