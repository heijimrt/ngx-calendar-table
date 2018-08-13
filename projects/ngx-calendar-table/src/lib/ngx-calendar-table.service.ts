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
   * Build calendar table columns.
   * Create range of dates to generate columns.
   *
   * @param date {Date} Receive a date
   * @param columnsNumber {number} Number of columns to render + 1
   * @param frequency {string} Can set days, month, year
   * @param format {string} You can choose the format based on momentjs
   *
   * @example buildColumns(new Date(), 4, 'month', 'MM/YYYY')
   *
   * @returns Array of Columns
   */
  public buildColumns(
    date: Date,
    columnsNumber: number = 2,
    frequency: string = 'days',
    format: string
  ): Column[] {

    if (!format) {
      format = this.getColumnKey(date, frequency);
    }
    const range = this.dateService.createRange(date, columnsNumber, frequency);
    return this.generateColumns(range, frequency, format);
  }

  /**
   * Generate range of columns
   *
   * @param range {date} Receives an array of dates
   * @param frequency {string} Can set days, month, year
   * @param format {string} You can choose the format based on momentjs
   *
   * @returns Array of Columns
   */
  public generateColumns(
    range: Date[],
    frequency: string,
    format: string
  ): Column[] {
    return range.map(
      (date) => {
        return this.getColumn(
          this.getColumnKey(date, frequency),
          date,
          this.getColumnHeader(date, format),
          frequency
        );
      });
  }

  /**
   * Return a column
   *
   * @param key {string} column identificator
   * @param date {date} column date parameter
   * @param header {string} header to show on template
   * @param frequency {string} Can set days, month, year
   *
   * @returns Instance of Column
   */
  public getColumn(
    key: string,
    date: Date,
    header: string,
    frequency?: string
  ): Column {
    return new Column(key, date, header, frequency);
  }

  /**
   * Return column header
   *
   * @param date {date} date to format
   * @param format {string} You can choose the format based on momentjs
   *
   */
  public getColumnHeader(
    date: Date,
    format: string,
  ): string {
    return this.dateService.format(date, format);
  }

  /**
   * Return column key
   * It usually be a column identificator but it is not a requirement
   *
   * @param date {date}
   * @param frequency {string} Can set days, month, year
   */
  public getColumnKey(
    date: Date,
    frequency: string
  ): string {

    switch (frequency) {
      case 'days':
        return this.dateService.format(date, 'YYYY-MM-DD');

      case 'month':
        return this.dateService.format(date, 'YYYY-MM');

      case 'year':
        return this.dateService.format(date, 'YYYY');

      default:
          return (date instanceof Date)
               ? this.dateService.format(date, 'YYYY-MM-DD')
               : date;
    }
  }

  /**
   * Manipulate rows to create identification for matching with columns
   *
   * @param rows {any} An array of objects
   * @param frequency {string} Can set days, month, year
   */
  public manipulateRows(
    rows: any[],
    frequency: string
  ) {
    return rows.map((row) => {
      Object.keys(row).map(
        (key) => {
          this.generateRowIdentificator(row, key, frequency);
        });
    });
  }

  /**
   * Generate an identificator property to row
   *
   * @param row {object} it usually be date and value like { '2018-04-14' : value }
   * @param key {string} key of object. ex: '2018-04-14'
   * @param frequency {string} Can set days, month, year
   *
   */
  private generateRowIdentificator(
    row: Object,
    key: string,
    frequency: string
  ) {
    const columnKey = this.getColumnKey(new Date(key), frequency);

    row[columnKey] = {
      value : row[key],
      key   : key
    };
    return row;
  }
}
