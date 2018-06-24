import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarTableComponent } from './ngx-calendar-table.component';

describe('NgxCalendarTableComponent', () => {
  let component: NgxCalendarTableComponent;
  let fixture: ComponentFixture<NgxCalendarTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCalendarTableComponent ]
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
