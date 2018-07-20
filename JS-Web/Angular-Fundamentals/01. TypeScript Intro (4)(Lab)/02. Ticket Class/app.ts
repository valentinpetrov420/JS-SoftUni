import Ticket from './ticketclass';

function solve(arr, sortingMethod) {
    let result = [];
    for (let ticketInfo of arr) {
        let currentTicketInfo = ticketInfo.split('|');
        let currentTicket = new Ticket(
            currentTicketInfo[0],
            +currentTicketInfo[1],
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
            result.sort(function (a, b) {
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

const sortedByStatus = solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status');

const sortedByDestination = solve([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination");

const sortedByPrice = solve([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "price");

console.log(sortedByStatus);
console.log('------------');
console.log(sortedByDestination);
console.log('------------');
console.log(sortedByPrice);