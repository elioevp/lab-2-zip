import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "saul123",
  port: 3306,
  database: "crudnode1",
});
