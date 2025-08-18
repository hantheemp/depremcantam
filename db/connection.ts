import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { migrate } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../drizzle/migrations';
import { DATABASE_NAME } from '@env';
import * as schema from './schema';

let db: ReturnType<typeof drizzle> | null = null;
let isInitialized = false;

export async function initializeDB(): Promise<ReturnType<typeof drizzle>> {
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

export async function runMigrations(): Promise<{ success: boolean; error: any | null }> {
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

export async function getDB(): Promise<ReturnType<typeof drizzle>> {
  if (!db) {
    await initializeDB();
  }

  if (!isInitialized) {
    await runMigrations();
  }

  return db!;
}

export function isDBReady(): boolean {
  return db !== null && isInitialized;
}

export async function setupDB(): Promise<{
  success: boolean;
  db?: ReturnType<typeof drizzle>;
  error?: any;
}> {
  try {
    // dropAllTables();
    await initializeDB();
    const migrationResult = await runMigrations();

    if (!migrationResult.success) {
      console.log(migrationResult.error);
      throw new Error(`Migration failed: ${migrationResult.error}`);
    }

    return { success: true, db: db! };
  } catch (error) {
    return { success: false, error };
  }
}

export async function closeDBConnection() {
  if (db) {
    db = null;
    isInitialized = false;
  }
}

/*
  #NOTE: Why the fuck i needed that? Let me explain.
  This stupid fucking drizzle would not let me update my column from VARCHAR2 to integer.
  Since i had no data, i dropped whole database with anger.
  But you know what? It fucking works.
*/

/*export async function dropAllTables(): Promise<{ success: boolean; error?: any }> {
  try {
    console.log('Dropping all existing tables...');

    db = null;
    isInitialized = false;

    const expoDb = openDatabaseSync(DATABASE_NAME);

    const tablesToDrop = [
      'clothing_items',
      'electronic_items',
      'food_items',
      'medical_items',
      'document_items',
      'special_care_items',
      'shared_bags',
      'bags',
      '__drizzle_migrations',
    ];

    for (const table of tablesToDrop) {
      try {
        expoDb.execSync(`DROP TABLE IF EXISTS ${table};`);
        console.log(`Dropped table: ${table}`);
      } catch (error) {
        console.log(`Table ${table} didn't exist or couldn't be dropped:`, error);
      }
    }

    console.log('All tables dropped successfully');
    return { success: true };
  } catch (error) {
    console.error('Failed to drop tables:', error);
    return { success: false, error };
  }
}*/

export { db };
