import { createTheme } from '@mui/material/styles'
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
  }

  interface PaletteColor {
    darker?: string
  }
  interface SimplePaletteColorOptions {
    darker?: string
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color']
    }
  }
}

export const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#ff9c00',
      darker: '#c57a01'
    },
    secondary: {
      main: '#ff0000',
      darker: '#b30000'
    },
    error: {
      main: '#ff0d00',
      darker: '#ae0900'
    },
    warning: {
      main: '#fffc00',
      darker: '#a9a600'
    },
    info: {
      main: '#0053ff',
      darker: '#003297'
    },
    success: {
      main: '#00ff0c',
      darker: '#00a808'
    },
    divider: 'rgba(255,90,0,0.12)',
    background: {
      default: '#000000'
    },
    neutral: {
      main: '#292929',
      contrastText: '#3c3c3c'
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: '"Encode Sans Expanded", "Helvetica", "Arial", sans-serif',
    h2: {
      fontSize: 36,
      color: '#ff9c00'
    },
    h3: {
      fontSize: 24,
      color: '#FFF'
    }
  }
})
