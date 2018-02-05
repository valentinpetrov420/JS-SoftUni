function solve(str, word){
    let regex = new RegExp('asd\\b'.replace('asd', word), 'gi');
    let counter = 0;

    let match = regex.exec(str);

    while(match){
        counter++;
        match = regex.exec(str);
    }
    console.log(counter);
}