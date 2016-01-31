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

  let index;

  const announcer = announcers.find((_announcer) => {
    index = _announcer.responses.findIndex(
      _response => new RegExp(data.text).test(_response)
    );
    
    return index !== -1;
  });

  const response = announcer.responses[index];

  bot.postMessageToChannel(data.channel,
    `"${response}" (sound warning: [${announcer.name}](${announcer.wiki}))`);
});