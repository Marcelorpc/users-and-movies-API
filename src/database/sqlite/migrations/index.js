import sqliteConnection from "../index.js";
import createUsers from "./createUsers.js";

async function migrationsRun() {
  const schemas = [
    createUsers
  ].join('');

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error));
}

export default migrationsRun;