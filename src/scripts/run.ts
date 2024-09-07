import print from '../shared/utils/print.ts';
import type {VoidFn} from '../shared/types/functions.ts';
import type {ID} from '../shared/types/basic.ts';

const script: VoidFn = (cb?: VoidFn, name?: string, id?: ID = "") => {
  let empty: VoidFn = () => console.info(`[SCRIPT] no script currently loaded`);
  if (!cb) { return empty() };
  console.info(`[SCRIPT] Running script${id ? print(` ${id}:`) : ':'} ${name ? print(name) : ' '}`);
  cb();
}

script();

