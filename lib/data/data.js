const axios = require('axios');
const parser = require('htmlparser');
const select = require('soupselect').select;
const fs = require('fs');
const err = require('../utils/err');
const toURIFormat = require('./toURIFormat');
const toAnnouncerNameFormat = require('./toAnnouncerNameFormat');
const last = require('../utils/last');

const ANNOUNCERS_API = 'http://dota2.gamepedia.com/api.php?action=query&list=categorymembers&cmlimit=500%27%20%27&cmprop=title&format=json&cmtitle=Category:Lists_of_responses';
const RESPONSES_BASE_URL = 'http://dota2.gamepedia.com'; // e.g., http://dota2.gamepedia.com/abaddon_responses
const FILENAME = 'responses.json';

(async function() {
  try {
    const announcers$ = await axios.get(ANNOUNCERS_API);
    const announcers = announcers$.data.query.categorymembers
      .map(announcer => toURIFormat(announcer.title));

    const data = [];

    // NOTE: We're not using `map` because
    // it doesn't work well with ES7 async-await
    for ( let i = 0; i < announcers.length; i++ ) {
      const announcer = announcers[i];
      const announcerName = toAnnouncerNameFormat(announcer);
      const announcerWiki = `${RESPONSES_BASE_URL}/${announcer}`;
      console.log(`querying: ${announcerName}`);

      try {
        const page$ = await axios.get(`${RESPONSES_BASE_URL}/${announcer}`)
        const body = page$.data;

        const handler = new parser.DefaultHandler();
        const parsed = new parser.Parser(handler);
        parsed.parseComplete(body);
        
        const responses = select(handler.dom, 'li')
          .filter(node => /sm2_button/.test(node.children.map(node => node.data || node.raw).join('')))
          .map(node => last(node.children).data.replace('\n', '').trim())
          // Remove empty responses such as Phoenix's
          .filter(response => response.length);

        data.push({
          name: announcerName,
          responses,
          wiki: announcerWiki
        });
      } catch(e) {
        err(e);
      }
    }

    console.log('success: querying');
    fs.writeFileSync(`${__dirname}/${FILENAME}`, JSON.stringify({ data }), 'utf8');
    console.log('success: write to file');
  } catch(e) {
    err(e);
  }
})();