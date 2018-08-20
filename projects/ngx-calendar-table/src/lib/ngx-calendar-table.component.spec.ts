import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarTableComponent } from './ngx-calendar-table.component';
import { DateService } from '../services/date/date.service';
import { NgxCalendarTableService } from './ngx-calendar-table.service';
import { NgxCalendarTableFrequencyModule } from './ngx-calendar-table-frequency/ngx-calendar-table-frequency.module';
import { NgxCalendarTableControlsComponent } from './ngx-calendar-table-controls/ngx-calendar-table-controls.component';

describe('NgxCalendarTableComponent', () => {
  let component: NgxCalendarTableComponent;
  let fixture: ComponentFixture<NgxCalendarTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgxCalendarTableComponent,
        NgxCalendarTableControlsComponent
      ],
      providers: [
        DateService,
        NgxCalendarTableService
      ],
      imports: [
        NgxCalendarTableFrequencyModule
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
