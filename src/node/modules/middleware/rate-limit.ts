import rateLimit from 'express-rate-limit';
let config;
config = {}

const limiter = rateLimit(config);
export default limiter;
