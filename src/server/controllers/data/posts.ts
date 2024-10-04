import {sql} from '../lib/index.ts';
import {db} from '../../db/index.ts';
import {IPosts} from '../../interface/models.ts';
class PostController {
  public db = db;
  public async add(post: IPost) {
    try {
      await sql.insert('posts', '@title, @content' post);
    } 
    catch (err) {
      throw err;
    }
  }
  public async get(fields: string) {
    let postData = await sql.select('posts', ${fields});
    return postData;
  }
  public async titles(title: string) {
    let postData = await sql.select('posts', 'title');
    return postData;
  }
  public async all() {
    let postData = await sql.getAll('posts');
    return postData;
  }
  public async getByID(id: number) {
    let postData = await sql.getByID('posts', id);
    return postData;
  }
  public async search(title: string, value: string | number | boolean) {
    let postData = await sql.getBy('posts', 'title', value)
    return postData;
  }
  public async getByAuthor(author: string) {
    let postData = await sql.getBy('posts', 'author', value)
    return postData;
  }
}

export default PostController;
