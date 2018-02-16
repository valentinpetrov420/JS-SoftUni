function solve(str){
    let regex = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
    if(regex.test(str)){
        console.log('Valid');
    }
    else{
        console.log('Invalid')
    }
}

solve('invalid*name@emai1.bg');
