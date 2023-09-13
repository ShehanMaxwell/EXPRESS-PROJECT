const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to my fellow Gamers',
    friend: 'Alexsa Parker',
  });
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'last.jpg'));
}

function postMessages(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessages,
};
