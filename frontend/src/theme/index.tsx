import { TypographyStyle, createTheme } from '@mui/material'
import '../index.css'
import type {} from '@mui/x-data-grid/themeAugmentation'

declare module '@mui/material/styles' {
  interface TypeText {
    low: string
    medium: string
    high: string
  }

  interface PaletteColor {
    50: string
    100: string
    300: string
    500: string
    700: string
    green50: string
    green100: string
    icon: string
  }

  interface CustomPalette {
    stroke: {
      50: string
      100: string
      icon: string
      border: string
    }
    accent: {
      green50: string
      100: string
      red: string
      green100: string
    }
    structural: {
      50: string
      100: string
      white: string
    }
  }

  interface Palette extends CustomPalette {
    structural: {
      50: string
      white: string
      100: string
    }
    stroke: {
      50: string
      100: string
      border: string
      icon: string
    }
    accent: {
      green50: string
      100: string
      red: string
      green100: string
    }
  }
  interface PaletteOptions extends CustomPalette {
    structural: {
      50: string
      100: string
      white: string
    }
    stroke: {
      50: string
      100: string
      border: string
      icon: string
    }
    accent: {
      green50: string
      100: string
      red: string
      green100: string
    }
  }

  interface TypographyVariants {
    h1: TypographyStyle
    h2: TypographyStyle
    subTitle1: TypographyStyle
    subTitle2: TypographyStyle
    subTitle3: TypographyStyle
    b1: TypographyStyle
    b2: TypographyStyle
    b3: TypographyStyle
    c1: TypographyStyle
    c2: TypographyStyle
  }

  interface TypographyVariantsOptions {
    h1: TypographyStyle
    h2: TypographyStyle
    subTitle1: TypographyStyle
    subTitle2: TypographyStyle
    subTitle3: TypographyStyle
    b1: TypographyStyle
    b2: TypographyStyle
    b3: TypographyStyle
    c1: TypographyStyle
    c2: TypographyStyle
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
    h2: true
    subTitle1: true
    subTitle2: true
    subTitle3: true
    b1: true
    b2: true
    b3: true
    c1: true
    c2: true
  }
}

const Theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      300: '#CFF5F6',
      500: '#625AFA',
      700: '#0055BC',
    },
    text: {
      low: '#687385',
      medium: '#404452',
      high: '#1A1B25',
    },
    structural: {
      100: '#EBEEF1',
      50: '#F6F8FA',
      white: '#FFFFFF',
    },
    stroke: {
      100: '#C0C8D2',
      50: '#EBEEF1',
      icon: '#545969',
      border: '#E0E6EB',
    },
    accent: {
      green50: '#D7F7C2',
      100: '#0196ED',
      red: '#ED6704',
      green100: '#006908',
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: '1.75rem',
      fontFamily: 'Segoe UI',
      lineHeight: '2.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.5rem',
      fontFamily: 'Segoe UI',
      lineHeight: '2.5rem',
    },
    subTitle1: {
      fontWeight: 700,
      fontSize: '1rem',
      fontFamily: 'Segoe UI',
      lineHeight: '1.33rem',
    },
    subTitle2: {
      fontWeight: 600,
      fontSize: '1rem',
      fontFamily: 'Segoe UI',
      lineHeight: '1.33rem',
    },
    subTitle3: {
      fontWeight: 400,
      fontSize: '1rem',
      fontFamily: 'Segoe UI',
      lineHeight: '1.25rem',
    },
    b1: {
      fontWeight: 700,
      fontSize: '0.875rem',
      fontFamily: 'Segoe UI',
      lineHeight: '1.16rem',
    },
    b2: {
      fontWeight: 600,
      fontSize: '0.875rem',
      fontFamily: 'Segoe UI',
      lineHeight: '1.5rem',
    },
    b3: {
      fontWeight: 400,
      fontSize: '0.875rem',
      fontFamily: 'Segoe UI',
      lineHeight: '1.16rem',
    },
    c1: {
      fontWeight: 600,
      fontSize: '0.75rem',
      fontFamily: 'Segoe UI',
      lineHeight: '0.98rem',
    },
    c2: {
      fontWeight: 400,
      fontSize: '0.75rem',
      fontFamily: 'Segoe UI',
      lineHeight: '0.98rem',
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderLeft: 'none',
          borderRight: 'none',
          width: '100%',
        },
        columnHeader: {
          fontWeight: 1000,
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
          color: '#000000',
        },

        cell: {
          '&:focus': {
            outline: 'none',
          },
        },
        columnHeaderCheckbox: {
          '& .MuiDataGrid-checkboxInput': {
            display: 'none',
          },
        },
        cellCheckbox: {
          '& .MuiDataGrid-checkboxInput': {
            color: '#C0C8D2',
            borderRadius: '4px',
          },
        },
      },
    },
  },
})

export default Theme
