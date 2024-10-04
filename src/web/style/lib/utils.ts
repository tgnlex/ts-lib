import {url} from 'csx';
export function flex(direction: string) {
  return {
    display: 'flex',
    flexDirection: `${direction}`
  }
}

function roundCorners(radius: string = '5px') {
  return {
    borderRadius: radius, 
    backgroundClip: 'padding-box'.
    '-webkit-border-radius': radius, 
    '-webkit-background-clip': 'padding-box',
    '-moz-border-radius': radius, 
    '-moz-background-clip': 'padding'
  }
}
export function img(link: string) {
  let location = url(link);
  if (!location) return console.warn(`[STYLE]: invalid url`);
  return location;
}
export function border(size: number) {
  return {
    border: `${size}px solid black`
  }
}
