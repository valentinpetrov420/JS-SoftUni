function solve(occurrence, text){
    let counter = 0;
    while (true){
        let startIndex = text.indexOf(occurrence);
        if(startIndex < 0) {
            break;
        }
        counter++;
        text = text.substr(startIndex + 1);
    }
    console.log(counter);
}

solve('the', 'The quick brown fox jumps over the lazy dog.');