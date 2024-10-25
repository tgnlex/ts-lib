import type Config from './interface/config.ts';
import type {Context} from './interface/log.ts';
import type {LogLevel, CustomLevels} from './interface/levels.ts';
import {CustomActions} from './interface/actions.ts';
import levels from './lib/defaults.ts';
let output: string;

class Logger {
  public readonly id: number = 1;
  public readonly name: string = "default"
  public readonly description: string = "none";
  public module: string | null;
  public minLevel: number = 10
  public maxLevel: number = 100
  public counter: boolean = true;
  public count: number = 0;
  customLevels?: CustomLevels;
  customActions?: CustomActions;
  
  
  constructor(config?: Config) {
   if (config) {
    if (config.id) this.id = config.id;
    if (config.name) this.name = config.name;
    if (config.description) this.description = config.description;
    if (config.module)  this.module = config.module;
    if (config.minLevel) this.minLevel = config.minLevel;
    if (config.maxLevel) this.maxLevel = config.maxLevel;
    if (config.counter) this.counter = config.counter;
    // ------------------------------------------------// 
  }
  };
  private check = (level: LogLevel) => {
    if (level.value < this.minLevel && level.value > this.maxLevel) {
      return false;
    } 
  };
  private format = (msg: string, ctx: Context): string => {
    let level = ctx.level.name;
    output = `[${level}] | Message: ${msg} | Context: { ${ctx} }`
    return output;
  };
  private increment = () => {
    if (this.counter === true) {
      this.count++; 
    }

  }
  public noop = () => { return };
  public meta = (msg: string, ctx: Context = {level: levels.META}) => {
    if (this.check(ctx.level) === false) return null; 
    this.increment();
    output = this.format(msg, ctx);
    console.log(output);
  };
  public trace = (msg: string, ctx: Context = {level: levels.TRACE})  => {
    if (this.check(ctx.level) === false) return null;
    this.increment();
    output = this.format(msg, ctx);
    console.log(output);
  };
  public debug = (msg: string, ctx: Context = {level: levels.DEBUG}) => {
    if (this.check(ctx.level) === false) return null;
    this.increment();
    output = this.format(msg, ctx);
    console.debug(output)
  };
  public info  = (msg: string, ctx: Context = {level: levels.INFO}) => {
    if (this.check(ctx.level) === false) return null; 
    this.increment();
    output = this.format(msg, ctx);
    console.info(output)
  };
  public notice = (msg: string, ctx: Context = {level: levels.NOTICE}) => {
    if (this.check(ctx.level) === false) return null; 
    this.increment();
    output = this.format(msg, ctx);
    console.info(output)
  };
  public error =  (msg: string, ctx: Context = {level: levels.ERROR}) => {
    if (this.check(ctx.level) === false) return null; 
    this.increment();
    output = this.format(msg, ctx);
    console.error(output)
  };
  public panic = (msg: string, ctx: Context = {level: levels.PANIC}) => {
    if (this.check(ctx.level) === false) return null; 
    this.increment();
    output = this.format(msg, ctx);
    console.error(output)
  };
  public fatal = (msg: string, ctx: Context = {level: levels.FATAL}) => {
    if (this.check(ctx.level) === false) return null; 
    this.increment();
    output = this.format(msg, ctx);
    console.error(output)
  };
}

export default Logger;