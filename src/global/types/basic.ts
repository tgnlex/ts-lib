export type Id = string | number;
export type Value = string | number | boolean;
export type Text = string | string[];
export type Empty = {}
export type Object = { [key: Value]: any }
export type Context = Empty | Object;
export type ItemValue = Value | Value[] | Object | Empty;
