import { TestBed, inject } from '@angular/core/testing';

import { NgxCalendarTableService } from './ngx-calendar-table.service';
import { DateService } from '../services/date/date.service';

describe('NgxCalendarTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgxCalendarTableService,
        DateService
      ]
    });
  });

  it('should be created', inject([NgxCalendarTableService], (service: NgxCalendarTableService) => {
    expect(service).toBeTruthy();
  }));
});
