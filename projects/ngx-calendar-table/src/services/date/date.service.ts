import { Injectable } from '@angular/core';

import * as moment_ from 'moment';
const moment = moment_;

@Injectable()
export class DateService
{
    /**
     * Format date based on momentjs format
     *
     * @param date
     * @param format
     *
     * @example format(new Date(), 'MM/YYYY')
     * @returns 'MM/YYYY' ex: 1992/04
     */
    public format(date, format): string
    {
        return moment(date).format(format);
    }

    /**
     * Add time from date based on frequency
     *
     * @param date {date} based date to add
     * @param time number of columns to add
     * @param frequency {string} Can set days, month, year
     */
    public add(
        date: Date,
        time,
        frequency: string
    ) {
        return moment(date).add(time, frequency);
    }

    /**
     * Subtract time from date based on frequency
     *
     * @param date {date} based date to subtract
     * @param time number of columns to subtract
     * @param frequency {string} Can set days, month, year
     */
    public sub(
        date: Date,
        time,
        frequency: string
    ) {
        return moment(date).subtract(time, frequency);
    }

    /**
     * Create a new Date range
     *
     * @param date {date}
     * @param time
     * @param frequency {string} Can set days, month, year
     */
    public createRange(
        date: Date,
        time,
        frequency
    ): Date[] {
        const start = moment(date).add(time, frequency);
        let end = moment(date).subtract(time, frequency);
        const range: Date[] = [ end.toDate() ];

        while (end.isBefore(start)) {
          end = end.add(1, frequency);
          range.push(end.toDate());
        }
        return range;
    }
}
