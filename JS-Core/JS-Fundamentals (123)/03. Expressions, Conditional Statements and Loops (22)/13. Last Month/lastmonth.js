function solve(date){
    let day = date[0];
    let month = date[1];
    let year = date[2];

    let newDate = new Date(year, month - 1, 0);
    let daysCount = newDate.getDate();

    console.log(daysCount);
}

solve([13, 12, 2004]);