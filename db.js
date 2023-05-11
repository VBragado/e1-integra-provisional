const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_user',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: your_port,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
