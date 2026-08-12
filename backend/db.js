const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'piano_collection',
    password: 'MashPostgres!',
    port: 5432
});

module.exports = pool;