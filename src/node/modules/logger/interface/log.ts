import {LogLevel} from './levels.ts'
interface Context {
  [key: string]: any;
  level: LogLevel;
}


export {Context}