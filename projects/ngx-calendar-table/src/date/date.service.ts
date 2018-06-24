import { Injectable } from '@angular/core';

import * as moment_ from 'moment';
const moment = moment_;

@Injectable()
export class DateService
{
    /**
     * Format @param date based on @param format
     * 
     * @param date 
     * @param format 
     */
    public format(date, format)
    {
        return moment(date).format(format);
    }

    /**
     * Add time from date based on period
     *
     * @param date
     * @param time
     * @param period
     */
    public add(
        date,
        time,
        period
    ) {
        return moment(date).add(time, period);
    }

    /**
     * Subtract time from date based on period
     *
     * @param date
     * @param time
     * @param period
     */
    public sub(
        date,
        time,
        period
    ) {
        return moment(date).subtract(time, period);
    }

    /**
     * Create a new Date range based on @param date,
     * @param time and @param period
     *
     * @param date
     * @param time
     * @param period
     */
    public createRange(
        date: Date,
        time,
        period
    ) {
        const start = moment(date).add(time, period);
        let end = moment(date).subtract(time, period);
        const range: Date[] = [ end.toDate() ];

        while (end.isBefore(start)) {
          end = end.add(1, period);
          range.push(end.toDate());
        }
        return range;
    }
}
