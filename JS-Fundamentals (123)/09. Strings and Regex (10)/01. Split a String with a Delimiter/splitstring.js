function solve(str, delimeter){
    let splitElements = str.split(delimeter);

    for (let i = 0; i < splitElements.length; i++) {
        console.log(splitElements[i]);

    }

}

solve('One-Two-Three-Four-Five', '-');