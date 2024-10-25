import {Id, Value, Object, Empty, ItemValue} from './basic.ts';
// ItemValue type expands Value to allow for Objects and Arrays;
interface EmptyObject {};
interface Base { id?: Id }
interface Unit extends Base { value: Value; }
interface Item extends Base { name?: string, value: ItemValue }

