const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: 'asdfghjkl;\'',
    host: "localhost",
    port: 5432,
    database : "site",
})

module.exports = pool