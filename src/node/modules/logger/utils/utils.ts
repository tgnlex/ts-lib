let date: Date;
let stamp: string;
let idx: number;

const getIndex = (arg: string): number => {
  idx = process.argv.indexOf(arg);
  return idx;
}

const timestamp = (): string =>{
  date = new Date();
  stamp = date.toLocaleTimeString();
  return stamp;
}


export {getIndex, timestamp}
