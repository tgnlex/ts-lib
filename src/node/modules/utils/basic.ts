import type {NoopFn, ReadFn, PanicFn, SleepFn, LogFn} from '../../types.ts';
import type {Context} from '../../types.ts';
const noop: NoopFn = (): void => { return }
const read: ReadFn = (data: string): string => {return data; }
const panic: PanicFn = (message: string): void => {
  throw new Error(`${message}`)
}
const log: LogFn = (message: any, context: Context = {}): void => {
  if (context) {
    return console.info(message, `[Context]: ` + context)
  } else {
    return console.info(message)
  }
}
const sleep: SleepFn = (s: number): void => {
  let ms: number;
  ms = s * 1000;
  console.info(`Sleeping for ${s} seconds.`)
  setTimeout(() => {
    console.info(`[SERVER]: Done.`)
  }, ms)
}
export {noop, read, panic, sleep, log}
