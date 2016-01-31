const SlackBot = require('slackbots');
const announcers = require('./data/responses').data;

const bot = new SlackBot({
  token: 'xoxb-19901443797-F8zml3Rg72yzcsGDXkRwZiIP',
  name: 'morty'
});

bot.on('message', function(data) {
  if (data.type !== 'message') {
    return;
  }

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
  // We'll concatenate instead of using  template string's
  // multiline feature to avoid unwanted spaces.
  const message = 
    `> _${response.text}_\n` +
    `— *${announcer.name}* (${announcer.wiki})\n` +
    `:arrow_forward: ${response.audio}`;

  bot.postMessage(data.channel, message);
  console.log(`success: message [${message}]`);
});