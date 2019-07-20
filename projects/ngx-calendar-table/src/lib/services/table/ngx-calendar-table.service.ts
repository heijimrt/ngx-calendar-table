import { Injectable } from '@angular/core';
import { DateService } from '../date/date.service';
import { Column } from '../../models/column';

@Injectable({
  providedIn: 'root'
})
export class NgxCalendarTableService
{
  constructor(private readonly dateService: DateService) {}

  /**
   * Build columns
   *
   * @param date {Date}
   */
  public buildColumns(
    date: Date,
    dateRange: number,
    frequency: string
  ): Array<Column> {
    const dates: Array<Date> = this.dateService.createRange(
      date,
      dateRange,
      frequency
    );
    return dates.map((date: Date) => this.generateColumn(date));
  }

  /**
   * Generate column
   *
   * @param date {Date}
   */
  public generateColumn(date: Date): Column {
    console.log(date);
    const column = new Column();
    column.header = this.dateService.format(date, 'YYYY-MM-DD');
    return column;
  }
}
