function solve(str, substring){
    if(str.substr(str.length - substring.length) === substring){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

solve('This sentence ends with fun?', 'fun?');