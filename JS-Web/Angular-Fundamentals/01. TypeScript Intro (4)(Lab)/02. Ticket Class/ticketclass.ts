class Ticket {
    constructor(public destination: string,
                public price: number,
                public status: string) {
        this.destination = destination;
        this.price = +price;
        this.status = status;
    }
}

export default Ticket;