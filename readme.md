## dota2-responses-slack-bot [![Travis CI Badge](https://travis-ci.org/srph/dota2-responses-slack-bot.svg?branch=master)](https://travis-ci.org/srph/dota2-responses-slack-bot)
A Slack bot referencing Dota 2 responses to appropriate chat messages.
![preview](preview.png)

## Setup
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

1. Open up the deploy page (button link above) in a separate tab.
2. Go to your "Custom Integrations" page (`https://YOUR-TEAM.slack.com/apps/manage/custom-integrations`), and click the "Bots" link.
3. Add a new bot by clicking the "Add configuration" button. Fill up the necessary fields.
4. You should be able to see the *API Token* field. Copy the value of that field.
5. Save the integration.
6. Paste in the value of the *API Token* field to the *SLACK_API_TOKEN* field in Heroku. Fill up the remaining fields.
7. Press "Deploy for Free".

It should be working now. Happy spamming, people!

## Running
To contribute, you will need to create your own team and setup a bot as well.
```bash
npm i
npm run query
SLACK_API_TOKEN=<my-token> npm run server
```
Note that it may take a long time the first around because we're querying the data from [Dota 2 Gamepedia](http://dota2.gamepedia.com/).

## Motivation
This project was motivated by [DotaResponsesRedditBot](https://github.com/Jonarzz/DotaResponsesRedditBot) by [Jonarzz](https://github.com/Jonarzz).
