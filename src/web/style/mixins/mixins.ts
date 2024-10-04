import {border, flex, square} from './functions.ts';
export const base = { margin: 0, padding: 0 };
export const overflow = {overflowX: 'hidden', overflowY: 'scroll' }

export const flexRow = flex('row');
export const flexCol = flex('column');
export const inline = {display: "inline"}
export const thinBorder = border(1);
export const medBorder = border(2);
export const thickBorder = border(3);

export const maxSize = square('100%');
export const halfSize = square('50%');

export const alert = { color: 'red' }
export const success = { color: 'green' }

export const boxSize = {boxSizing: 'border-box'};
