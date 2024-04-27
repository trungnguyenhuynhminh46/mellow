import { Theme } from '@mui/material'

export type DisplayMode = 'light' | 'dark' | 'system';

export type ExtendedThemeType = {
    mellow: {
        headerHeight: string
        boardDetailHeaderHeight: string
        light: {
            themeColors: string[]
        }
        dark: {
            themeColors: string[]
        }
    }
}

export type CustomThemeType = ExtendedThemeType & Theme