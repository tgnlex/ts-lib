import {insert, remove, select, getBy, getById, getAll, count} from './queries.ts';
import {runFile, vtable, addFunc, addTable, getInfo} from './utils.ts';

function sql = {
  select: select,
  insert: insert, 
  remove: remove,
  search: getById,
  getBy: getBy,
  getAll: getAll, 
  getById: getById,
  count: count,
  runFile: runFile,
  vtable: vtable, 
  addFunc: addFunc,
  addTable: addTable,
  getInfo: getInfo
}
export default sql;
