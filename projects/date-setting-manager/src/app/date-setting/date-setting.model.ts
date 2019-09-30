export class Setting {
    active: Booking;
    upcoming: Booking;

    constructor(active?: Booking, upcoming?: Booking) {
        this.active = active;
        this.upcoming = upcoming;
    }
}


export class Booking {
    bookableDays: number;
    effectiveFrom: Date;

    constructor(bookableDays?: number, effectiveFrom?: Date) {
        this.bookableDays = bookableDays;
        this.effectiveFrom = effectiveFrom;
    }
}

export class DateNow {
    now: number;
    constructor(now?: number) {
        this.now = now;
    }
}
