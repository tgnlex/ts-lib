import {style} from 'typestyle';
import {thinBorder, medBorder} from '../mixins/_all.ts';
const search = {
  main: style({width: '100%', position: 'relative', display: 'flex'}),
  btn: style(thinBorder, { 
    width: '5%', height: '10%', textAlign: 'center', 
    cursor: 'pointer', fontSize: '1.4em', borderRadius: '0 5px 5px 0'
  }),
  field: style(medBorder, 
    {
      width: '100%', borderRight: 'none', padding: '5px', 
      height: '20px', borderRadius: '5px 0 0 5px', outline: '',
      $nest: { '&:focus': {color: 'cyan'}}    
    }
  )
}

export default search;
