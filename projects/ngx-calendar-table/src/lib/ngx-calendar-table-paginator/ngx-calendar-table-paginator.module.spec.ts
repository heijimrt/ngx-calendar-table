import { NgxCalendarTablePaginatorModule } from './ngx-calendar-table-paginator.module';

describe('NgxCalendarTablePaginatorModule', () => {
  let ngxCalendarTablePaginatorModule: NgxCalendarTablePaginatorModule;

  beforeEach(() => {
    ngxCalendarTablePaginatorModule = new NgxCalendarTablePaginatorModule();
  });

  it('should create an instance', () => {
    expect(ngxCalendarTablePaginatorModule).toBeTruthy();
  });
});
