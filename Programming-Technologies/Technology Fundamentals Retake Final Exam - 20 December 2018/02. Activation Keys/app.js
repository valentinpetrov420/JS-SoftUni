function app(input) {
    let string = input[0];
    let pattern = /^[a-zA-Z0-9]+$/;
    let digitPattern = /\d/;
    let validKeys = [];
    let currentKey = '';
    let allKeys = [];
    let fullKeys = [];
    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    for (let j = 0; j < string.length; j++) {
        console.log(string[j])
        if (digitPattern.test(string[j])) {
            console.log(digitPattern.test(string[j]));
            console.log(typeof string[j])
            let alteredDigit = Number(string[j]);
            alteredDigit -= 9;
            alteredDigit = Math.abs(alteredDigit);
            string = setCharAt(string, j, `${alteredDigit}`);
        }
    }
    let keys = string.split('&');
    for (let i = 0; i < keys.length; i++) {
        if (pattern.test(keys[i])) {

            validKeys.push(keys[i].toLocaleUpperCase());
        }
    }
    for (let i = 0; i < validKeys.length; i++) {
        if (validKeys[i].length === 16) {
            currentKey = validKeys[i].match(/.{1,4}/g)
            currentKey.toLocaleUpperCase;
        } else if (validKeys[i].length === 25) {
            currentKey = validKeys[i].match(/.{1,5}/g)
            currentKey.toLocaleUpperCase;
        }
        allKeys.push(currentKey);
        currentKey = '';
    }
    for (arr of allKeys) {
        fullKeys.push(arr.join('-'));
    }
    console.log(fullKeys.join(', '))
}

app(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs'])