const Client = require("pg");

const client = new Client({
  host: "localhost",
  user: "timialabi",
  port: "5432",
  password: "goldenfocs",
  database: "joblog",
});

// const client = new pg.Client({
//   connectionString: process.env.DATABASE_URL || "",
//   ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
// });

client
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server: \n${e}`));

client.query();

module.exports = client;
