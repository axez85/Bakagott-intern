const Pool = require("pg");
const fs = require("fs");

const pool = require("./db.js")

const sql = fs.readFileSync('database.sql', 'utf8');

pool.query(sql)
  .then(() => console.log('Database initialized'))
  .catch(err => console.error('Error initializing database', err))
  .finally(() => pool.end()); 