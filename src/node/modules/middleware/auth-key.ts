import {Request as Req, Response as Res} from 'express';
import {NextFunction as Next} from 'express';

function authKey(req: Req, res: Res, next: Next)  {
  if (req.headers.authorization === 'secret-key') {
    req.hasKey = true;
    next();
  } else {
    req.hasKey = false;
    res.status(401).send('Access denied!')
  }
}

export default authKey;
