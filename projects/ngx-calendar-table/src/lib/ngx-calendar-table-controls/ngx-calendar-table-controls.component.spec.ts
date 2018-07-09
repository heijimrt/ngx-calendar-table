import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarTableControlsComponent } from './ngx-calendar-table-controls.component';

describe('NgxCalendarTableControlsComponent', () => {
  let component: NgxCalendarTableControlsComponent;
  let fixture: ComponentFixture<NgxCalendarTableControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCalendarTableControlsComponent ]
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
