export type Id = string | number;
export type Value = string | number | boolean;
export type Text = string | string[];
export type Empty = {}
export type Object = { [key: string]: any }
export type Context = Empty | Object;
export type ItemValue = Value | Value[] | Object | Empty;

export type NoopFn = () =>  void;
export type ReadFn = (data: string) => string
export type PanicFn = (message: string) =>  void;
export type LogFn = (message: string | string[], context: Context) => void;
export type SleepFn = (s: number) => void
