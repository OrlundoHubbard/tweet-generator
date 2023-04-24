const previousTweets = ["I love pizza", "Today is a beautiful day"]

const cleanTweets = previousTweets.map(tweet => {
    const cleanTweet = tweet.replace(/[^\w\s]/gi, "");
    return cleanTweet.toLowerCase();
})