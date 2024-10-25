
class ConsoleService  {
  stdin = process.stdin;
  stdout = process.stdout;
  stderr = process.stderr;
  colorMode: boolean = false;
  constructor(options: any) {
    if (options.colorMode === true) { this.colorMode = true; }
  }
}


export default ConsoleService;