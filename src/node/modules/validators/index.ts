
function ageValidator(user: any) {
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
