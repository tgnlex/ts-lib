import {style} from 'typestyle';
import 
export const list = style({
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'column',
  $nest: {
    '& li': {
      textAlign: 'center'
    }      
  }
});

export const inlineList = style({
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  $nest: {
    '& li': {
      textAlign: 'center',
      display: 'inline',
    }
  }
})
