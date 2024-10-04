import {sql} from '../lib/index.ts';
import db from '../../db/index.ts';
import {ISubscriber} from '../../lib/models.ts';


class SubscriberController {
  public db = db;
  public async add(user: ISubscriber) {
    try {
      await sql.insert('subscribers', '@email' subscriber);
    } 
    catch (err) {
      throw err;
    }
  }
  public async get(fields: string) {
    let subscriberData = await sql.select('subscribers', ${fields});
    return subscriberData;
  }
  public async all() {
    let subscriberData = await sql.getAll('subscribers');
    return subscriberData;
  }
  public async getByID(id: number) {
    let subscriberData = await sql.getByID('subscribers', id);
    return subscriberData;
  }
  public async getByEmail(title: string, value: string) {
    let subscriberData = await sql.getBy('subscribers', 'email', value)
    return subscriberData;
  }
}

export default SubscriberController;
