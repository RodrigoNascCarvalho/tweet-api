# tweet-api

This is just a simple implementation of an Express API that uses the Twitter API to get the last 50 tweets of a given user.

Currently, this project is running on port 4000, due to its integration with tweet-feed.

In order to properly run it. It's necessary to add a config.js file in the root of the project with the following data: 

```javascript
module.exports = {
  consumer_key: '<INSERT_CONSUMER_KEY_HERE>',
  consumer_secret: '<INSERT_CONSUMER_SECRET_HERE>',
  access_token_key: '<INSERT_TOKEN_KEY_HERE>',
  access_token_secret: '<INSERT_TOKEN_SECRET_HERE>'
;}
```

To run it, just type:

```
npm install
node index.js
```
