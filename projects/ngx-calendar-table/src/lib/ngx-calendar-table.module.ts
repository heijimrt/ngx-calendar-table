import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxCalendarTableComponent } from './ngx-calendar-table.component';
import { DateService } from './services/date/date.service';
import { NgxCalendarTableService } from './services/table/ngx-calendar-table.service';
import { NgxCalendarTableContentDirective } from './directives/ngx-calendar-table-content.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxCalendarTableComponent,
    NgxCalendarTableContentDirective
  ],
  providers: [
    DateService,
    NgxCalendarTableService
  ],
  exports: [
    NgxCalendarTableComponent,
    NgxCalendarTableContentDirective
  ]
})
export class NgxCalendarTableModule { }
