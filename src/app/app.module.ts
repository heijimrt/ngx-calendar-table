import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCalendarTableModule } from '../../projects/ngx-calendar-table/src/lib/ngx-calendar-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCalendarTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
