const users = require('./users');

function setup(app){
  app.get('/api/users', users.create);
}

module.exports = { setup }