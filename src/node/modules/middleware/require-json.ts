import type { NextFunction } from 'express';
import {error} from '../utils/status.ts';

function requireJson(req: Request, res: Response, next: NextFunction) {
  let ctype: string | null = req.headers.get('content-type'); 
  if (ctype !== 'application/json') {
    error().send('Server requires content type: application/json')
  } else {
    next();              
  }
}
export default requireJson;