function solve(arr){
    let patterns = {
        nameRegex: /(\*[A-Z]{1}[A-Za-z]*)(?= |\t|$)/g,
        numRegex: /(\+[0-9\-]{10})(?= |\t|$)/g,
        idRegex: /(\![a-zA-Z0-9]+)(?= |\t|$)/g,
        baseRegex: /(\_[a-zA-Z0-9]+)(?= |\t|$)/g
    }

    let output = '';
    for(let string of arr){
        for(const pattern of Object.values(patterns)){
            string = string.replace(pattern, function(match) {
                return '|'.repeat(match.length);
            });
        }
        output += string + '\n';
    }
    console.log(output);
}

solve(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number. ',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']);