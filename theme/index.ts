import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  colors: {
    night: '#0E0A1A',
    surface: '#161126',
    line: '#2C2347',
    lineStrong: '#3B2F5E',
    brand: { 600: '#7C3AED', 700: '#6D28D9' },
    accent: '#A78BFA',
    lilac: '#C4B5FD',
    ink: '#F4F1FF',
    mist: '#A9A1C2',
    faint: '#8E86A8'
  },
  fonts: {
    heading: 'var(--font-heading), system-ui, sans-serif',
    body: 'var(--font-body), system-ui, sans-serif',
    mono: 'var(--font-mono), ui-monospace, monospace'
  },
  styles: {
    global: {
      html: { scrollBehavior: 'smooth' },
      body: {
        bg: 'night',
        color: 'ink',
        fontSize: '17px',
        lineHeight: 1.7
      },
      a: { color: 'lilac', _hover: { color: 'ink' } },
      '@media (prefers-reduced-motion: reduce)': {
        html: { scrollBehavior: 'auto' },
        '*, *::before, *::after': { animation: 'none !important' }
      }
    }
  },
  textStyles: {
    label: { fontFamily: 'mono', fontSize: '13px', fontWeight: 500 },
    h2: { fontFamily: 'heading', fontSize: '28px', fontWeight: 700 }
  },
  layerStyles: {
    card: {
      bg: 'surface',
      border: '1px solid',
      borderColor: 'line',
      borderRadius: '16px'
    },
    // Botones-enlace del diseño: 44px de alto para que sean tocables en móvil
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      h: '44px',
      px: 4,
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: 500,
      color: 'ink',
      border: '1px solid',
      borderColor: 'line',
      bg: 'surface'
    },
    primary: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      h: '44px',
      px: 4,
      borderRadius: '10px',
      fontSize: '15px',
      fontWeight: 600,
      color: 'white',
      bg: 'brand.600',
      _hover: { color: 'white', bg: 'brand.700' }
    }
  }
})

export default theme
