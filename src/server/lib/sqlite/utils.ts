import db from '../../../db/db.ts';
import fs from 'fs';

export const runFile = (filepath: string) => {
  const file = fs.readFileSync(`${filepath}.sql`, 'utf8');
  return db.exec(file);
}

export const vtable = (name: string, columns: string[], generator: Generator => {
  return db.table(name, {
    columns: columns,
    rows: generator
  })
}

export const addFunc = (name: string, cb: () => any;) => {
  return db.function(name, cb());
}

export const addTable = () => {
  let sql = db.prepare(`CREATE TABLE ${name} IF NOT EXISTS( ${fields} )`)
  db.run(sql);
}
export const getInfo = (index: string) => {
const info = db.pragma('index_info', `${index}`)

}
