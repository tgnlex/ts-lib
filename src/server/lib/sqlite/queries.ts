import db from '../../../db/db.ts';
export const insert = (table: string, fieldss: string, data: string) => {
  let sql = db.prepare(`INSERT INTO ${table} VALUES ${values}`);
  sql.run(data);
}
export const remove = (table: string, condition: string, value: any) => {
  let sql = db.prepare(`DELETE FROM ${table} WHERE ${condition} = ?`)
  sql.run(value);
}
export const select = (table: string, fields: string, condition?: string) => {
  if (condition) {
    let sql = db.prepare(`SELECT ${fields} FROM ${table} WHERE ${condition}`);
  } else {
    let sql = db.prepare(`SELECT ${fields} FROM ${table}`);
  }
  sql.run();
}
export const getBy = (table: string, fieldname: string, value: string | number | boolean) => {
  let sql = db.prepare(`SELECT * FROM ${table} WHERE ${fieldname} = ?`)
  sql.run(value);
}
export const getByID = (table: string, fields?: string, id: number) => {
  if (fields) {
    let sql = db.prepare(`SELECT ${fields} FROM ${table} WHERE id = ?`)
  } else {
    let sql = db.prepare(`SELECT * FROM ${table} WHERE id = ?`);
  }
  sql.run(id);
}

export const getAll = (table: string) => {
  let sql = db.prepare(`SELECT * FROM  ${table}`);
  sql.run();
}
export const count = (table: string) => {
  let sql = db.prepare(`COUNT (*) OVER FROM ${table}`);
  return sql.run();
}

