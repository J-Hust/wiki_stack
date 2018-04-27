const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports('User');
