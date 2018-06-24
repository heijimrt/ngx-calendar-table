import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxCalendarTableService
{
  public _date: Subject<any>  = new Subject();
  public date$: Observable<any> = this._date.asObservable();
}
