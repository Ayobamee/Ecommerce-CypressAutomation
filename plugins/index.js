


const postgreSQL = require('cypress-postgresql');
const pg = require('pg');
const dbConfig = require('../../cypress.json');

module.exports = (on, config) => {
  const pool = new pg.Pool(dbConfig.db);
  tasks = postgreSQL.loadDBPlugin( pool );
  on('task', tasks);
}