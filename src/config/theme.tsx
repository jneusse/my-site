import { createTheme } from '@mui/material/styles'
import { fontWeight } from '@mui/system'
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral: Palette['primary']
    vino: Palette['primary']
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
    vino: PaletteOptions['primary']
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
  interface TypographyVariants {
    li: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    li?: React.CSSProperties
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
      main: '#005656',
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
    },
    vino: {
      main: '#560010'
    }
  },
  typography: {
    fontSize: 12,
    body1: {
      color: '#FFFFFF'
    },
    fontFamily: '"Encode Sans Expanded", "Helvetica", "Arial", sans-serif',
    h2: {
      fontSize: 36,
      color: '#ff9c00'
    },
    h3: {
      fontSize: 24,
      color: '#FFF'
    },
    h4: {
      fontSize: 24,
      color: '#ff9c00'
    },
    h5: {
      fontSize: 16,
      color: '#ff9c00',
      fontWeight: 800,
      fontFamily: 'Helvetica'
    },
    li: {
      fontSize: 16,
      color: '#ff9c00'
    }
  }
})
