import bcrypt from 'bcrypt';

const compare = (password: string, hash: string) => {
  const result = bcrypt.compare(password, hash)
}
