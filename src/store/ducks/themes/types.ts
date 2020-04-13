/**
 * Action types
 */
export enum ThemesTypes {
    CHANGE_THEME = '@repositories/CHANGE_THEME',    
}

/**
 * Data types
 */
export type TypeTheme = 'dark' | 'light'

/**
 * State type
 */
export interface ThemeState {
    readonly data: TypeTheme;
}