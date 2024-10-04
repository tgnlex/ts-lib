import {error} from '../utils/status.ts';

function requireJson(req = req, res = res, next = next) {
  let ctype = req.headers['content-type']; 
  if (ctype !== 'application/json') {
    error().send('Server requires content type: application/json')
  } else {
    next();              
  }
}
