import { TestBed, inject } from '@angular/core/testing';

import { NgxCalendarTableService } from './ngx-calendar-table.service';

describe('NgxCalendarTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxCalendarTableService]
    });
  });

  it('should be created', inject([NgxCalendarTableService], (service: NgxCalendarTableService) => {
    expect(service).toBeTruthy();
  }));
});
