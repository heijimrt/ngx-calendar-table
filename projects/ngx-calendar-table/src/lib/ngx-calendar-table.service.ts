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

  public formatColumnRange(
    ranges: any[],
    format: Object
  ) {
    return ranges.map(
      (range) => new Column(
        this.dateService.format(range, 'YYYY-MM-DD'),
        this.dateService.format(range, this.formatDateColumn(format))
      ));
  }

  private formatDateColumn(format: Object)
  {
    if (format.hasOwnProperty('date')) {
      return format['date'];
    }
    return 'YYYY-MM-DD';
  }
}
