import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve(__dirname, '../../src/database/notaria15tsx.db'); // Adjust the path according to the actual structure
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');

    // Crear tabla records
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS records (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        volume TEXT NOT NULL,
        book TEXT NOT NULL,
        initial_deed INTEGER NOT NULL,
        final_deed INTEGER NOT NULL,
        fol TEXT NOT NULL,
        month TEXT NOT NULL,
        creation_date TEXT NOT NULL,
        first_acto TEXT NOT NULL,
        first_grantor TEXT NOT NULL,
        first_receiver TEXT NOT NULL,
        first_acto_date TEXT NOT NULL,
        second_acto TEXT NOT NULL,
        second_grantor TEXT NOT NULL,
        second_receiver TEXT NOT NULL,
        second_acto_date TEXT NOT NULL
      );
    `;

    db.run(createTableQuery, (tableErr) => {
      if (tableErr) {
        console.error('Error al crear la tabla "records":', tableErr.message);
      } else {
        console.log('Tabla "records" verificada/creada correctamente.');
      }
    });

    // Agregar columna borrowed_book si no existe
    const checkColumnQuery = `
      PRAGMA table_info(records);
    `;
    db.all(checkColumnQuery, (err, rows) => {
      if (err) {
        console.error('Error al verificar columnas de la tabla "records":', err.message);
        return;
      }

      const columnExists = rows.some((row: any) => row.name === 'borrowed_book');
      if (!columnExists) {
        const addColumnQuery = `
          ALTER TABLE records ADD COLUMN borrowed_book BOOLEAN DEFAULT 0;
        `;
        db.run(addColumnQuery, (alterErr) => {
          if (alterErr) {
            console.error('Error al agregar columna "borrowed_book":', alterErr.message);
          } else {
            console.log('Columna "borrowed_book" agregada correctamente.');
          }
        });
      } else {
        console.log('Columna "borrowed_book" ya existe.');
      }
    });
  }
});

export default db;