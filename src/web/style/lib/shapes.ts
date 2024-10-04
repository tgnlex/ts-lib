import {max} from '../lib/_all.tsx';
export function square(size: string = '100px', color?: string) {
    if (!color) return { height: size, width: size;}
    return {
      backgroundColor: `${color}`,
      height: size,
      width: size
    } 
}
export function circle(size: string = '100px', color?: string) {
  if (!color) return {height: size, width: size, borderRadius: max}
  return {
    backgroundColor: color,
    borderRadius: max,
    height: size, 
    width: size, 
    
  }
}
