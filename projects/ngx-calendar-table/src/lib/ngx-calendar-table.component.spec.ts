import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarTableComponent } from './ngx-calendar-table.component';
import { DateService } from './services/date/date.service';
import { NgxCalendarTableService } from './services/table/ngx-calendar-table.service';

describe('NgxCalendarTableComponent', () => {
  let component: NgxCalendarTableComponent;
  let fixture: ComponentFixture<NgxCalendarTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgxCalendarTableComponent
      ],
      providers: [
        DateService,
        NgxCalendarTableService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCalendarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
