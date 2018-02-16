function solve(str, substring){
    if(str.substr(0, substring.length) === substring){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

solve('How have you been?',
    'how');