function solve(str){
    let regex = /[-a-zA-Z0-9@:%._\+~#=]{3,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    let sites = [];
    let match = regex.exec(str);
    while(match){
        sites.push(match[0])
        match = regex.exec(str);
    }
    for (let i = 0; i < sites.length; i++) {
        console.log(sites[i]);
    }
}

solve('Join WebStars now for free, at www.web-stars.com\n' +
    'You can also support our partners:\n' +
    'Internet - www.internet.com\n' +
    'WebSpiders - www.webspiders101.com\n' +
    'Sentinel - ww.ivan.com ');