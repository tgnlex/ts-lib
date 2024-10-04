import type {Context, Message, ItemValue} from '../../global/types/basic.ts';

export type NoopFn = () =>  void;
export type ReadFn = (data: ItemValue) => string
export type PanicFn = (message: string) =>  void;
export type LogFn = (message: Message, context: Context) => void;
export type SleepFn = (s: number) => void
