// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import journal from './meta/_journal.json';
import m0000 from './0000_narrow_changeling.sql';
import m0001 from './0001_polite_white_queen.sql';
import m0002 from './0002_hard_franklin_richards.sql';

  export default {
    journal,
    migrations: {
      m0000,
m0001,
m0002
    }
  }
  