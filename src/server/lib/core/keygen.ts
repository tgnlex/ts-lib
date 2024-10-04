import crypto from 'node:crypto';
  const keygen = () => {
    let key = crypto.randomBytes(64).toString('hex');
    return key;
  }

export default keygen;
  
