import type {Input} from '../interface/input';

function fieldName(input: Input) {
  let id: string;
  let fmt: string;
  let name: string;
  id = input.id;
  fmt = id.charAt(0).toUpperCase()
  name = fmt + id.slice(1);
  return name;
}

export default fieldName;

