import getSignature from './signature.ts';
import {JWT_SECRET} from '../../../config/env.ts';
const jwt = {
  secret:  JWT_SECRET || "123h23hr298",
  sig: getSignature
}

export default jwt;
