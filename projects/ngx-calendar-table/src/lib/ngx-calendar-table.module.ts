import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxCalendarTableComponent } from './ngx-calendar-table.component';
import { DateService } from '../services/date/date.service';
import { NgxCalendarTableService } from './ngx-calendar-table.service';
import { NgxCalendarTableControlsComponent } from './ngx-calendar-table-controls/ngx-calendar-table-controls.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxCalendarTableComponent,
    NgxCalendarTableControlsComponent
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
