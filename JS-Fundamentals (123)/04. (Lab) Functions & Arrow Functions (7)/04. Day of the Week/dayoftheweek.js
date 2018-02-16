function solve(day){
    let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
    if(days.includes(day)){
        for(let i = 0; i < days.length; i++){
            if(day == days[i]){
                console.log(i+1);
            }
        }
    }
    else{
        console.log('error');
    }
}

solve('Friday');
solve('Monday');
solve('asd');