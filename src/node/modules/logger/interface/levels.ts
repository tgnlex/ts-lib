type LevelType = "default" | "custom" | "none";
interface LogLevel {
  readonly name: string; 
  readonly value: number; 
  readonly type: LevelType
}
interface CustomLevel extends LogLevel { readonly type: "custom" }
interface DefaultLevel extends LogLevel { readonly  type: "default" }
export interface None extends LogLevel { 
  name: 'NONE', value: 0; type: "none"
};
export interface Meta extends LogLevel  { 
  name: 'META', value: 10; type: "default"
};
export interface Trace extends LogLevel { 
  name: 'TRACE', value:  20; type: "default"
};
export interface Debug extends LogLevel {
  name: 'DEBUG', value: 30; type: "default"
};
export interface Info  extends LogLevel  {
  name: 'INFO', value: 40; type: "default"
};
export interface Notice extends LogLevel {
  name: 'NOTICE', value: 50; type: "default";
}
export interface Warn extends LogLevel  {
  name: 'WARN', value: 60; type: "default";
};
export interface Error extends LogLevel {
  name: 'ERROR', value: 70; type: "default";
};
export interface Panic extends LogLevel {
  name: 'PANIC', value: 80; type: "default";
};
export interface Fatal extends LogLevel {
  name: 'FATAL', value: 90; type: "default";
};

interface CustomLevels {[key: string]: CustomLevel};

interface DefaultLevels  {
    NONE: None
    META: Meta
    TRACE: Trace;
    DEBUG: Debug;
    INFO: Info, 
    NOTICE: Notice,
    WARN: Warn;
    ERROR: Error;
    PANIC: Panic;
    FATAL: Fatal;
}

export {
  DefaultLevel,
  CustomLevels, 
  CustomLevel,
  DefaultLevels,
  LogLevel
}
              