import {sql} from '../lib/index.ts';
import {db} from '../../db/index.ts';
import {IUser} from '../../interface/models.ts';


class UserController {
  public db = db;
  public async add(user: IUser) {
    const fields = `@age, @email, @username, @password_hash, @hash_salt`
    try {
      await sql.insert('users', `${fields}` user);
    } 
    catch (err) {
      throw err;
    }
  }
  public async get(fields: string) {
    let userData = await sql.select('users', ${fields});
    return userData;
  }
  public async all() {
    let userData = await sql.getAll('users');
    return userData;
  }
  public async getByID(id: number) {
    let userData = await sql.getByID('users', id);
    return userData;
  }
  public async search(username: string) {
    let userData = await sql.getBy('users', 'username', username)
    return userData;
  }
  public async emailSearch(email: string) {
    let userData = await sql.getBy('users', 'email', email)
  }
}

export default UserController;
