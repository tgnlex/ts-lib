import rateLimit from 'express-rate-limit';
import config from '../config/config.ts';

const limiter = rateLimit(config.limit);
export default limiter;
