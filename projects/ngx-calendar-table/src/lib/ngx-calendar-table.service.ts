import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DateService } from '../services/date/date.service';
import { Column } from './models/Column';

@Injectable({
  providedIn: 'root'
})
export class NgxCalendarTableService
{
  public _date: Subject<any>  = new Subject();
  public date$: Observable<any> = this._date.asObservable();

  constructor(private dateService: DateService) { }

  /**
   * Build calendar table columns
   *
   * @param date
   * @param columnsNumber
   * @param frequency
   * @param format
   */
  public buildColumns(
    date: Date,
    columnsNumber: number,
    frequency: string,
    format: Object
  ) {
    const dateRange = this.dateService.createRange(date, columnsNumber, frequency);
    return this.generateRangeColumns(dateRange, frequency, format);
  }

  public generateRangeColumns(
    ranges: any[],
    frequency: string,
    format: Object
  ) {
    return ranges.map(
      (range) => {
        return new Column(
          this.dateService.format(range, this.formatDateColumn(frequency, format)),
          this.dateService.format(range, this.formatDateColumn(frequency, format))
        );
      });
  }

  public formatDateColumn(
    frequency: string,
    format: Object
  ) {
    switch (frequency) {
      case 'month':
        return this.formatByMonth(format);

      case 'year':
        return this.formatByYear(format);

      default:
        return this.formatByDay(format);
    }
  }

  private formatByDay(format: Object)
  {
    if (this.hasFormat(format, 'date')) {
      return format['date'];
    }
    return 'YYYY-MM-DD';
  }

  private formatByMonth(format: Object)
  {
    if (this.hasFormat(format, 'month')) {
      return format['month'];
    }
    return 'MMMM/YYYY';
  }

  private formatByYear(format: Object)
  {
    if (this.hasFormat(format, 'year')) {
      return format['year'];
    }
    return 'YYYY';
  }

  hasFormat(format, type)
  {
    return format
        && format.hasOwnProperty(type);
  }
}
