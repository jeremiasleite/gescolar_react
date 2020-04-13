import { action } from 'typesafe-actions';
import { ThemesTypes } from './types';

export const change_theme = () => action(ThemesTypes.CHANGE_THEME);