import { CustomThemeType } from '@shared/hooks/useCustomTheme.tsx'

export const getThemeColors = (theme: CustomThemeType): string[] => {
  const themeMode = theme.palette.mode
  const themeColors = themeMode === 'light' ? theme.mellow.light.themeColors : theme.mellow.dark.themeColors
  return themeColors.map(color => color.toString())
}
