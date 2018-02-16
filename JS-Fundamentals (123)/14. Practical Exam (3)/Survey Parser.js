function solve(str){
    let headerRegex = /(?=<cat><text>)[a-zA-Z_<> \/\d?\[\]-]+(?=<\/text><\/cat>)/g;
    let surveyNameRegex = /(?=\[)[a-zA-Z_<> \/\d?\[\]-]+]/;
    let surveyLabelRegex = /a/g;
    let surveyRatingsRegex = /(?=<\/cat>)[a-zA-Z_<> \/\d?\[\]-]+(?=<\/cat>)/;
    let ratingNum = /(?<=<val>)[\d]+/g;
    let ratingCount = /(?<=<\/val>)[\d]+/g;
    let ratingNums = [];
    let ratingCounts = [];
    let output = '';

    if(!str.match(headerRegex)){
        console.log('No survey found');
        return;
    }
    else{
        if(str.match(surveyRatingsRegex) == null){
            console.log('Invalid format');
            return;
        }
        let header = str.match(headerRegex).toString();
        let surveyRatings = str.match(surveyRatingsRegex);
        if(header.match(surveyNameRegex) == null){
            console.log('Invalid format');
            return;
        }
        let surveyName = header.match(surveyNameRegex).toString();
        output += surveyName.substring(1, surveyName.length-1);
        output += ': ';
        let m = ratingNum.exec(surveyRatings);
        let m1 = ratingCount.exec(surveyRatings);
        while(m){
            ratingNums.push(Number(m));
            ratingCounts.push(Number(m1));

            m = ratingNum.exec(surveyRatings);
            m1 = ratingCount.exec(surveyRatings);
        }

    }
    if(ratingNums < 5 || ratingNums > 5){
        console.log('Invalid format');
        return;
    }
    let average = 0;
    let total = 0;
    let totalCount = 0;
    for(let i = 0; i < ratingCounts.length; i++){
        total += ratingCounts[i] * ratingNums[i];
        totalCount += ratingCounts[i];
    }
    average = (total/totalCount);
    let multiplier = Math.pow(10, 2);
    let result = Math.round(average * multiplier) / multiplier;
    console.log(output + result);
}

solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
solve('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
solve('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>\n');
solve('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');