const express = require('express');
const bodyParser = require('body-parser');
const twitterService = require('./api/twitter-service');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => { 
	res.send('It\'s alive');
});

app.get('/api/tweets/:username', (req, res) => {
	let username = req.params.username;

	twitterService.getUserTweets(username, 50)
		.then(tweets => {
			res.json(tweets);
		})
		.catch(err => {
			res.status(404);
			res.send('Not found');
		});
});

app.listen(4000);