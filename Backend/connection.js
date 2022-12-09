const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'foodis',
  password: 'admin12345',
  port: 5435,
})

module.exports = pool