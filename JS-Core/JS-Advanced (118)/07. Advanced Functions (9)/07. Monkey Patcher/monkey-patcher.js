function monkeyPatch(input) {
    let self = this;
    let commands = {
        upvote: () => {
            self.upvotes++
        },
        downvote: () => {
            self.downvotes++
        },
        score: () => {
            let currentUpvotes = self.upvotes;
            let currentDownvotes = self.downvotes;
            let rating = 'new';

            let isNewPost = currentUpvotes + currentDownvotes < 10;
            if (!isNewPost) {
                updateRating();
            }

            let shouldObfuscate = currentUpvotes + currentDownvotes > 50
            if (shouldObfuscate) {
                inflateVotes();
            }
            let score = currentUpvotes - currentDownvotes;
            return [currentUpvotes, currentDownvotes, score, rating];

            function updateRating() {
                if (currentUpvotes > 0.66 * (currentUpvotes + currentDownvotes)) {
                    rating = 'hot';
                } else if (currentDownvotes > currentUpvotes) {
                    rating = 'unpopular';
                } else if (currentUpvotes > 100 || currentDownvotes > 100) {
                    rating = 'controversial';
                }
            }

            function inflateVotes() {
                let modifier = Math.ceil(0.25 * Math.max(currentUpvotes, currentDownvotes));
                currentUpvotes += modifier;
                currentDownvotes += modifier;
            }
        }
    };
    return commands[input]();
}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

monkeyPatch.call(post, 'upvote');
monkeyPatch.call(post, 'downvote');
let score = monkeyPatch.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 0; i++) {
    monkeyPatch.call(post, 'downvote');
}
score = monkeyPatch.call(post, 'score');
console.log(score);// (executed 50 times)