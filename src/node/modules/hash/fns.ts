import bcrypt from 'bcrypt';

function create(password: string) {
  let saltRounds: number = 10;
  let hashed_password = bcrypt.hash(password, saltRounds)
  return hashed_password;
}
const compare = (password: string, hash: string) => {
  const result = bcrypt.compare(password, hash)
  if (!result) {
    return null;
  } else {
    return result;
  }
}

export {compare, create}
