import { Pool } from "pg";

const connectionString = "postgresql://postgres:thNbfAgmmHkxPLlkCxQrXgguZkMNVZOO@junction.proxy.rlwy.net:26000/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
