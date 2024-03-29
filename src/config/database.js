// get the client
require('dotenv').config();
const mongoose = require('mongoose')
// get the client
const mysql = require('mysql2/promise');
// create the connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, // default: 3306
//     user: process.env.DB_USER, // default: empty
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
//   });

// ##################### CONNECT WITH MONGODB ####################
// const connection =  mongoose.createConnection(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/`)
const connection =mongoose.createConnection(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
// mongodb://admin:315%40nhidong@14.225.20.7:29017/
  // Create the connection pool. The pool-specific settings are the defaults
// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, // default: 3306
//   user: process.env.DB_USER, // default: empty
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0
// });



  module.exports = connection;

