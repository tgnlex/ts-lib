import Role from '../../types/literal.ts';

class User {
  constructor(
    age: age,
    email: string, 
    username: string,
    hashed: string, 
    salt: any,
    role: Role
  ) {
    this.age = age;
    this.email = email;
    this.hashed = hashed;
    this.salt = salt;
    this.role = role;
  }
}
