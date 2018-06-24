import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxCalendarTableComponent } from './ngx-calendar-table.component';
import { DateService } from '../date/date.service';
import { NgxCalendarTableService } from './ngx-calendar-table.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxCalendarTableComponent
  ],
  providers: [
    DateService,
    NgxCalendarTableService
  ],
  exports: [
    NgxCalendarTableComponent
  ]
})
export class NgxCalendarTableModule { }
