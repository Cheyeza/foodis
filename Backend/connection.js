const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'foodis',
  password: 'Te1998/5',
  port: 5432,
})

module.exports = pool