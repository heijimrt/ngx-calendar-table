import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarTableControlsComponent } from './ngx-calendar-table-controls.component';
import { DateService } from '../../services/date/date.service';

describe('NgxCalendarTableControlsComponent', () => {
  let component: NgxCalendarTableControlsComponent;
  let fixture: ComponentFixture<NgxCalendarTableControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgxCalendarTableControlsComponent
      ],
      providers: [
        DateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCalendarTableControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
