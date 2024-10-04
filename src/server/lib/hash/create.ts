import {hash} from 'bcrypt';

function createHash(password: string) {
  let saltRounds: number = 10;
  let hashed_password = hash(password, saltRounds)
  return hashed_password;
}

export default createHash;
