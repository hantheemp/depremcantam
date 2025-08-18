import React, { createContext, useContext, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { setupDB, getDB } from './connection';
import { drizzle } from 'drizzle-orm/expo-sqlite';

interface DBContextValue {
  db: ReturnType<typeof drizzle> | null;
}

const DBContext = createContext<DBContextValue>({ db: null });

export const DBProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [db, setDB] = useState<ReturnType<typeof drizzle> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initDB() {
      try {
        const result = await setupDB();
        if (result.db) {
          setDB(result.db);
        } else {
          setDB(null);
        }

        setLoading(false);
      } catch (error) {
        throw new Error(`DB Setup failed: ${error}`);
      }
    }

    initDB();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <DBContext.Provider value={{ db }}>{children}</DBContext.Provider>;
};

export function useDB() {
  return useContext(DBContext).db;
}
