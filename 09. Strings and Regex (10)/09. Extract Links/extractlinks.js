function solve(arr){
    let pattern = /(www\.)([a-zA-Z\d\-]+)+(\.[a-z]+)+/g;
    let sites = [];

    for(const string of arr){
        let match = pattern.exec(string);

        while (match){
            sites.push(match[0]);
            match = pattern.exec(string);
        }
    }
    console.log(sites.join('\n'));
}

solve('Join WebStars now for free, at www.web-stars.com\n' +
    'You can also support our partners:\n' +
    'Internet - www.internet.com\n' +
    'WebSpiders - www.webspiders101.com\n' +
    'Sentinel - ww.ivan.com ');