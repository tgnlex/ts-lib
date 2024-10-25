

function random(num: number) {
  let val: number = Math.floor(Math.random() * (num + 1));
  return val;      
}

export {
  random,
}
