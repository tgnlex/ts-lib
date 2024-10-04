import {JWT_SECRET} from '../../config/env.ts';
let secret = JWT_SECRET || "123h23hr298"; 

function getSignature(header, payload) {
  let data = Base64UrlEncode(header) + '.' Base64UrlEncode(payload)
  let hashedData = Hash(data, secret);
  let signature = Base64UrlEncode(hashedData);
  return signature;
}

export default getSignature;
