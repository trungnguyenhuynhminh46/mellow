import { createTheme, PaletteMode } from '@mui/material'
import { amber, deepOrange, grey } from '@mui/material/colors'

export default function useCustomTheme(mode: PaletteMode | undefined) {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800]
          }
        }
        : {
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900]
          },
          text: {
            primary: '#fff',
            secondary: grey[500]
          }
        })
    }
  })
}