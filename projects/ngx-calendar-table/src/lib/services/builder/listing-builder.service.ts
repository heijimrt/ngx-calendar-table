import { Injectable } from '@angular/core';
import { CalendarListing } from '../../models/calendar-listing';

@Injectable({
  providedIn: 'root'
})
export abstract class ListingBuilderService
{
    private _listing: CalendarListing;
    set listing(value) {
        this._listing = value;
    }
    get listing() {
        return this._listing;
    }
    abstract buildColumns();
}
