import { Injectable } from '@angular/core';

import * as moment_ from 'moment';
const moment = moment_;

@Injectable()
export class DateService
{
    /**
     * Format date based on momentjs format
     *
     * @param date {Date}
     * @param format {String}
     *
     * @example format(new Date(), 'MM/YYYY')
     * @returns 'MM/YYYY' ex: 1992/04
     */
    public format(
        date: Date,
        format: string
    ): string {
        return moment(date).format(format);
    }

    /**
     * Add time from date based on frequency
     *
     * @param date {date} based date to add
     * @param time {number} of columns to add
     * @param frequency {string} Can set days, month, year
     */
    public add(
        date: Date,
        time: number|any,
        frequency: string
    ) {
        return moment(date).add(time, frequency);
    }

    /**
     * Subtract time from date based on frequency
     *
     * @param date {date} based date to subtract
     * @param time {number} of columns to subtract
     * @param frequency {string} Can set days, month, year
     */
    public sub(
        date: Date,
        time: number|any,
        frequency: string
    ) {
        return moment(date).subtract(time, frequency);
    }

    /**
     * Create a new Date range
     *
     * @param date {date}
     * @param time {number}
     * @param frequency {string} Can set days, month, year
     */
    public createRange(
        date: Date,
        timeRange: number|any,
        frequency: string
    ): Date[] {
        const start = moment(date).add(timeRange, frequency);
        let end = moment(date).subtract(timeRange, frequency);
        const dateRange: Date[] = [ end.toDate() ];

        while (end.isBefore(start)) {
          end = end.add(1, frequency);
          dateRange.push(end.toDate());
        }
        return dateRange;
    }
}
