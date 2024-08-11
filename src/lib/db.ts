import mysql, { Connection, QueryOptions, RowDataPacket } from 'mysql2/promise';

// This file contains the database connection logic and helper functions for interacting with the database.

// Create a connection to the MySQL database
const connection: Promise<Connection> = mysql.createConnection({
  host: 'localhost:3306',
  user: 'viamsint',
  password: '',
  database: 'viamsint_formhandle'
});

// Define a generic query function that can execute SQL queries
export async function query(sql: string, params?: any[]): Promise<RowDataPacket[]> {
  // Get the database connection
  const conn = await connection;

  // Execute the SQL query with the provided parameters
  const [rows] = await conn.execute(sql, params);

  // Return the result rows as RowDataPacket[]
  return rows as RowDataPacket[];
}