interface IWorkers {
  pool: any[];
  create: (filename: string) => any;
  start: (worker: Worker, cb: any, event: Event) => any;
  kill: (worker: any) => void;
  log: (worker: any) => void;
  logAll: () => void 
}

const workers: IWorkers = {
  pool: [],
  create(filename: string) {
    let worker;
    if (typeof(worker) == "undefined") {
      worker = new Worker(`${filename}`);
      this.pool.push(worker);
      return worker;
    }
  },
  start(worker: Worker, cb: any, event: Event) {
    worker.onmessage = cb(event);
  },
  kill(worker: any) {
    worker.terminate();
    worker = undefined;
  },
  log(worker: Worker) {
    return console.info(worker);
  },
  logAll() {
    return console.info(this.pool);
  }
}
export default workers;