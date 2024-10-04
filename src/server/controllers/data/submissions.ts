import {sql} from '../lib/index.ts';
import db from '../../db/index.ts';
import {ISubmissions} from '../../lib/models.ts';

class SubmissionController {
  public db = db;
  public async add(submission: ISubmission) {
    try {
      await sql.insert('submissions', '@email @topic @content @name' submission);
    } 
    catch (err) {
      throw err;
    }
  }
  public async get(fields: string) {
    let submissionData = await sql.select('submissions', ${fields});
    return submissionData;
  }
  public async titles(title: string) {
    let submissionData = await sql.select('submissions', 'title');
    return submissionData;
  }
  public async all() {
    let submissionData = await sql.getAll('submissions');
    return submissionData;
  }
  public async getByID(id: number) {
    let submissionData = await sql.getByID('submissions', id);
    return submissionData;
  }
  public async getByTopic(topic: string) {
    let submissionData = await sql.getBy('submissions', 'topic', topic);
    return submissionData;
  }
  public async getByEmail(email: string) {
    let submissionData = await sql.getBy('submissions', 'email', email)
    return submissionData;
  }
}

export default SubmissionController;
