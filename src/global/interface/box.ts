import {Base, Item, Unit } from './base.ts';
import {Value} from '../basic.ts';

interface BoxBase extends Base { readonly name?: string };

interface Box extends BoxBase { readonly value: Value; };

interface StrBox extends BoxBase { readonly value: string | string[] };
interface IntBox extends BoxBase { readonly value: number | number[] };
interface BoolBox extends BoxBase { readonly value: boolean | boolean[] };

interface ItemBox extends BoxBase { readonly item: Item; };
interface UnitBox extends BoxBase { readonly unit: Unit; };
