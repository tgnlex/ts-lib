import {sql} from '../lib/index.ts';
import {db} from '../../db/index.ts';
import {IPosts} from '../types/interface/models.ts';
class CommentController {
  public db = db;
  public async add(comment: any) {
    try {
      await sql.insert('comments',  '@content' comment);
    } 
    catch (err) {
      throw err;
    }
  }
  public async get(fields: string) {
    let commentData = await sql.select('comments', ${fields});
    return postData;
  }
  public async all() {
    let commentData = await sql.getAll('comments');
    return commentData;
  }
  public async getByID(id: number) {
    let commentData = await sql.getByID('comments', id);
    return commentData;
  }
  public async getBy(title: string, field: string, value: string | number | boolean) {
    let commentData = await sql.getBy('comments',`${field}` , value)
    return commentData;
  }
  public async getByUser(author: string) {
    let commentData = await sql.getBy('comments', 'user_id', value)
    return commentData;
  }
}

export default CommentController;
