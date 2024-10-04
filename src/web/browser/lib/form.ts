import {Input} from '../types/elements.ts';

function fieldName(input: Input) {
  const id = input.id;
  const fmt = id.charAt(0).toUpperCase()
  let name = fmt + id.slice(1);
  return name;
}


