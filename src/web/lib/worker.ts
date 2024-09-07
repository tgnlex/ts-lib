import {CreateWorker, KillWorker, StartWorker, LogWorker, LogAllWorkers} from './types/functions.ts';
interface IWorkers {
  pool: Array;
  create: CreateWorker;
  start: StartWorker;
  kill: KillWorker;
  log: LogWorker;
  logAll: LogAllWorkers;
}

const workers: IWorkers = {
  pool: [],
  create(filename: string) {
    if (typeof(worker) == "undefined") {
      worker = new Worker(`${filename}`);
      pool.push(worker);
      return worker;
    }
  },
  start(worker, callback, event) {
    worker.onmessage = callback(event);
  },
  kill(worker) {
    worker.terminate();
    worker = undefined;
  },
  log(worker) {
    return console.info(worker);
  },
  logAll() {
    return console.info(this.pool);
  }
}
