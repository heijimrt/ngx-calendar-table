import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-calendar-table-frequency',
    templateUrl: './ngx-calendar-table-frequency.component.html'
})

export class NgxCalendarTableFrequencyComponent
{
    @Output() public dataNotifier: EventEmitter<any> = new EventEmitter();

    public onChange(event)
    {
        this.dataNotifier.emit(event);
    }
}
