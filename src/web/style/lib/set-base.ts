import {cssRule} from 'typestyle';
import {base, overflow, maxSize} from './mixins.ts';
function setBase() {
  return (
  cssRule('html', 'body', {
    base,
    overflow,
    maxSize,
    boxSizing: 'borderBox'
  }),
  cssRule('*', '*:before', '*:after' {
      boxSizing: 'inherit'
    }
  })
  )
}

export default setBase
