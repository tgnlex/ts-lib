import type {NoopFn, ReadFn, PanicFn, SleepFn, LogFn} from '../types/fns.ts';
import type {Context, Message} from '../../global/types/basic.ts';
const noop: NoopFn = (): void => { 
  return 
}
const read: ReadFn = (data: string): string => { 
  return data; 
}
const panic: PanicFn = (message: string): void => {
  throw new Error(`${message}`)
}
const log: LogFn = (message: Message, context?: Context = {}): void => {
  if (context) {
    return console.info(message, `[Context]: ` + context)
  } else {
    return console.info(message)
  }
}
const sleep: SleepFn = (s: number): void => {
  let ms = s * 1000;
  console.info(`Sleeping for ${s} seconds.`)
  setTimeout(ms, () => {
    console.info(`[SERVER]: Done.`)
  })
}
export {noop, read, panic, sleep, log}
