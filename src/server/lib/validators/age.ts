import {IUser as User, IAdmin as Admin} from './models.ts';

function ageValidator(user: User | Admin) {
  if (user.age < 18) {
    const validationError = new Error(`
      [VALIDATOR] Invalid parameters... Users must be at least 18 years of age to 
      register an account.`)
      console.error(validationError);
    return;
  } else {
    return user;
  }
}

export {ageValidator};
