import {Request, Response, NextFunction} from 'express';

const tryCatch = (fn) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  } 
}
