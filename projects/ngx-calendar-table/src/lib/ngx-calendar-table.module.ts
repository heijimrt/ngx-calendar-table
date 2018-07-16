import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxCalendarTableComponent } from './ngx-calendar-table.component';
import { DateService } from '../services/date/date.service';
import { NgxCalendarTableService } from './ngx-calendar-table.service';
import { NgxCalendarTableControlsComponent } from './ngx-calendar-table-controls/ngx-calendar-table-controls.component';
import { NgxCalendarTableContentDirective } from './directives/ngx-calendar-table-content.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgxCalendarTableComponent,
    NgxCalendarTableControlsComponent,
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
