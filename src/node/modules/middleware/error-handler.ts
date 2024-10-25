import type {Response} from 'express';
type Function = () => void;
const handleError = (err: any, res: Response) => {
  console.error('Error caught in express app.', err)
  if (err.isOperational) {
    res.status(err.statusCode).json({
       code: err.statusCode,
       status: err.status,
       message: err.message
    });
  } else 
    res.status(500).json({
      code: 500,
      status: 'error',
      message: 'Server Error: Something went wrong...'
    })
}

const errorHandler = (err: any, req: Request, res: Response, next: Function) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  handleError(err, res);
}

export default errorHandler;
