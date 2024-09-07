type Argument = string | number;

function getInput(): Argument {
  let err = new Error(`[CLI] Error: Must specify a valid argument.`)
  let args = process.argv;
  let input = args[2];
  if (!input) {
    console.error(err);
    throw err;
  }
  return input;
}


