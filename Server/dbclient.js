const {Client} = require('pg');

const client = new Client({
    host: 'localhost', 
    user: "postgres",
    port: 5432,
    password: "pogba123",
    database: "epsi"
}); client.connect();

module.exports = client;
