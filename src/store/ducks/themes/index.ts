import { Reducer } from 'redux';
import { ThemeState , ThemesTypes  } from './types';

const INITIAL_STATE: ThemeState = {
  data: 'light'
};

const reducer: Reducer<ThemeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemesTypes.CHANGE_THEME:
        return {...state, data: state.data === 'light'? 'dark': 'light'}    
    default:
      return state;
  }
};

export default reducer;