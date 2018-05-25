function solve(arr, sortingMethod) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = +price;
            while(+price[price.length] == 0){
                +price[price.length].slice(-1)
            }
            this.status = status;
        }
    }
    let result = [];
    for (let ticketInfo of arr) {
        let currentTicketInfo = ticketInfo.split('|');
        let currentTicket = new Ticket(
            currentTicketInfo[0],
            currentTicketInfo[1],
            currentTicketInfo[2]);
        result.push(currentTicket);
    }
    switch (sortingMethod) {
        case 'destination':
            result.sort(function (a, b) {
                return a.destination.localeCompare(b.destination);
            });
            break;
        case 'price':
            result.sort(function (a, b){
                return a.price - b.price;
            });
            break;
        case 'status':
            result.sort(function (a, b) {
                return a.status.localeCompare(b.status);
            });
            break;
    }
    return result;
}

let resultArray = solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status');

console.log(resultArray);