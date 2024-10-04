import {Response} from 'express';
const resp = {
  header: (response: Response = response, name: string): string => {
    let h = res.headers[`${name}`];
    return h;
  }
}

export default resp;
