import { TestBed, inject } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateService]
    });
  });

  it('should be created', inject([DateService], (service: DateService) => {
    expect(service).toBeTruthy();
  }));

  it('should format received literal date', inject([DateService], (service: DateService) => {
    const format = service.format('2018/07/09', 'YYYY-MM-DD');
    expect(format).toBe('2018-07-09');
  }));
});
