const Pool = require("pg").Pool;

const client = new Pool({
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
  .then(() => console.log("DB Connected Successfully"))

  .then(() => client.query("SELECT * FROM users"))
  .then((reuslt) => console.table(reuslt.rows))
  .catch((e) => console.log(`Error connecting to Postgres server: \n${e}`));

module.exports = client;
