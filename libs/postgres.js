const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: '172.20.0.2',
    port: 5432,
    user: 'xavi',
    password: 'admin123',
    database: 'my_store',
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
