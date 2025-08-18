import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { migrate } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../drizzle/migrations';
import { DATABASE_NAME } from '@env';
import * as schema from './schema';

let db: ReturnType<typeof drizzle> | null = null;
let isInitialized = false;

function initializeDB() {
  if (!db) {
    try {
      const expoDb = openDatabaseSync(DATABASE_NAME);
      db = drizzle(expoDb, { schema });
    } catch (error) {
      throw new Error(`Database initialization failed: ${error}`);
    }
  }
  return db;
}

async function runMigrations() {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDB() first.');
  }

  try {
    await migrate(db, migrations);
    isInitialized = true;
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error };
  }
}

export function getDB() {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDB() first.');
  }
  if (!isInitialized) {
    throw new Error('Database migrations are not completed. Call setupDatabase() first.');
  }
  return db;
}

export function isDBReady(): boolean {
  return db !== null && isInitialized;
}

export async function setupDB() {
  try {
    initializeDB();
    const migrationResult = await runMigrations();

    if (!migrationResult.success) {
      throw new Error(`Migration failed: ${migrationResult.error}`);
    }

    return { success: true, db: getDB() };
  } catch (error) {
    return { success: false, error };
  }
}

/* 
    #NOTE: As far as I know, SQLite does not have any explicit close method. 
    But I have created this method for robustness. 
    Instead of destroying or removing references to SQLite, I reset reference to objects that holds SQLite reference. 
*/

export function closeDBConnection() {
  if (db) {
    db = null;
    isInitialized = false;
  }
}

export { db };
