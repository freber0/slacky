import { Database } from 'sqlite3';

export async function initDatabase(db: Database) {

  await db.exec(`
    CREATE TABLE IF NOT EXISTS User (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      username TEXT NOT NULL
    )
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS Channel (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL
    )
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS Message (
      id TEXT PRIMARY KEY,
      content TEXT NOT NULL,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      userId INTEGER,
      channelId INTEGER,
      FOREIGN KEY (userId) REFERENCES User(id),
      FOREIGN KEY (channelId) REFERENCES Channel(id)
    )
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS UserChannel (
      userId INTEGER,
      channelId INTEGER,
      PRIMARY KEY (userId, channelId),
      FOREIGN KEY (userId) REFERENCES User(id),
      FOREIGN KEY (channelId) REFERENCES Channel(id)
    )
  `);
}