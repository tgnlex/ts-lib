import type{Request, Response, NextFunction} from 'express';

const tryCatch = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  } 
}
export default tryCatch;
