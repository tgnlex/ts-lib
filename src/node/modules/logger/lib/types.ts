
type Context = {} | {[key: string]: any};
type LogFn = (message: string, context: Context) => void;
type Noop = () => void;

export { Context, LogFn, Noop }
