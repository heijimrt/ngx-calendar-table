import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  HostBinding,
  ChangeDetectionStrategy
} from '@angular/core';

import { Column } from './models/column';
import { NgxCalendarTableContentDirective } from './directives/ngx-calendar-table-content.directive';
import { NgxCalendarTableService } from './services/table/ngx-calendar-table.service';
import { Frequency } from './enums/frequency.enum';

@Component({
  selector: 'ngx-calendar-table',
  templateUrl: './ngx-calendar-table.component.html',
  styleUrls: ['./ngx-calendar-table.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxCalendarTableComponent
{
  public columns: Column[] = [];
  @Input()
  public rows: any[] = [];
  @HostBinding('class')
  public classes: string = 'ngx-calendar-content-table';
  @ContentChild(
    NgxCalendarTableContentDirective,
    { read: TemplateRef }
  ) public tableContentDirective: any;

  constructor(private readonly calendarService: NgxCalendarTableService) {}

  ngOnInit() {
    this.columns = this.calendarService.buildColumns(new Date(), 2, Frequency.MONTHLY);
  }
}
