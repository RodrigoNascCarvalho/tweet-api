const Twitter = require('twitter');
const config = require('./config');

const twitterService = (() => {
	const client = new Twitter(config);

	function getUserTweets(screenName, count) {
		let params =  { screen_name: screenName, count: count };

		return new Promise ((resolve, reject) => {
			client.get('statuses/user_timeline', params, (err, tweets, res) => {
				if (!err) {
					resolve(tweets);
				}
				reject(err);
			});
		});
	}

	return {
		getUserTweets: getUserTweets
	};
})();

module.exports = twitterService;

