import RGB from '@shared/classes/RGB.ts'
import { Theme } from '@mui/material'

export type DisplayMode = 'light' | 'dark' | 'system';

export type ExtendedThemeType = {
    mellow: {
        headerHeight: string
        boardDetailHeaderHeight: string
        light: {
            themeColors: RGB[]
        }
        dark: {
            themeColors: RGB[]
        }
    }
}

export type CustomThemeType = ExtendedThemeType & Theme