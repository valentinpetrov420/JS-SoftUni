function solve(input){
    let number = input[0];
    let result = number;
    for(let i = 1; i < input.length; i++){
        switch (input[i]){
            case 'chop': result = chop(result);
            break;
            case 'dice': result = dice(result);
            break;
            case 'spice': result = spice(result);
            break;
            case 'bake': result = bake(result);
            break;
            case 'fillet': result = fillet(result);
            break;
        }
        console.log(result);
    }
    function chop(number){
        return number/2;
    }
    function dice(number){
        return Math.sqrt(number);
    }
    function spice(number){
        return number + 1;
    }
    function bake(number){
        return number * 3;
    }
    function fillet(number){
        let subtraction = number * 0.20;
        return Math.abs(number - subtraction);
    }


}

solve([32, 'chop', 'chop', 'chop', 'chop', 'chop']);