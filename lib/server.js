const SlackBot = require('slackbots');
const announcers = require('./data/responses').data;
const blacklist = require('./blacklist');

const bot = new SlackBot({
  token: process.env.SLACK_API_TOKEN,
  name: process.env.SLACK_BOT_NAME || 'dota2-guy'
});

bot.on('message', function(data) {
  if (data.type !== 'message') {
    return;
  }

  // If the message is in the blacklist, stop.
  if ( blacklist.find(str => data.text.toLowerCase().includes(str)) != null ) {
    return;
  }

  // #TODO: There has to be a better way to do this.
  let response = null;

  const announcer = announcers.find((_announcer) => {
    response = _announcer.responses.find(
      (_response) => new RegExp(data.text).test(_response.text)
    );
    
    return response != null;
  });

  if ( response == null ) {
    return;
  }

  // https://api.slack.com/docs/formatting
  // We'll concatenate instead of using template string's
  // multiline feature to avoid unwanted spaces.
  const message = 
    `> _${response.text}_\n` +
    `— *${announcer.name}* (${announcer.wiki})\n` +
    `:arrow_forward: ${response.audio}`;

  bot.postMessage(data.channel, message);
  console.log(`success: message [${message}]`);
});

console.log('success: bot is now running.');