import {getIndex} from './utils.ts';

let check: boolean;

function flagCheck(flag: string): boolean {
  check = getIndex(`--${flag}`) !== -1;
  return check; 
}

export {flagCheck};