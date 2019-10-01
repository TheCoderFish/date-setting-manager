export class Setting {

    constructor(public active?: Booking, public upcoming?: Booking) {

    }
}


export class Booking {
    constructor(public bookableDays?: number, public effectiveFrom?: Date) {

    }
}
