import {Request as Req, Response as Res} from 'express';
import {NextFunction as Next} from 'express';

const reqLog = (req: Request, res: Response, next: Next) => {
  console.info(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  console.info(`Headers: ${req.headers}`);
  console.info(`Cookies" ${req.cookies}`);
  next();
}


export default reqLog;
