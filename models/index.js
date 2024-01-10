const Sequelize = require("sequelize");
const User = require('./user');
const Ticket = require('./ticket');
const Border = require('./border');

const env = process.env.NODE_ENV || 'development';
// env = development
const config = require('../c\onfig/config.json')[env];
//config.json['development']
//config = {"username": "root","password": "qwe123","database": "HelloKITicket","host": "127.0.0.1","dialect": "mysql"} config.username = root
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Ticket = Ticket;
db.Border = Border; 

User.initiate(sequelize);
Ticket.initiate(sequelize);
Border.initiate(sequelize);

// User.associations(db);
// Ticket.associations(db);
// Border.associations(db);

module.exports = db;