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

  it('should add two days and return formatted date', inject([DateService], (service: DateService) => {
    const add = service.add(new Date('2015-03-25'), 2, 'days');
    const formatted = service.format(add, 'YYYY-MM-DD');
    expect(formatted).toBe('2015-03-27');
  }));

  it('should subtract two days and return formatted date', inject([DateService], (service: DateService) => {
    const sub = service.sub(new Date('2015-03-25'), 2, 'days');
    const formatted = service.format(sub, 'YYYY-MM-DD');
    expect(formatted).toBe('2015-03-23');
  }));
});
