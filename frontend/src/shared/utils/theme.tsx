import { CustomThemeType } from '@shared/types/theme.ts'

export const getThemeColors = (theme: CustomThemeType): string[] => {
  const themeMode = theme.palette.mode
  return themeMode === 'light' ? theme.mellow.light.themeColors : theme.mellow.dark.themeColors
}
