export const theme = {
  colors: {
    surface: '#10141a',
    surfaceDim: '#10141a',
    surfaceBright: '#353940',
    surfaceContainerLowest: '#0a0e14',
    surfaceContainerLow: '#181c22',
    surfaceContainer: '#1c2026',
    surfaceContainerHigh: '#262a31',
    surfaceContainerHighest: '#31353c',
    onSurface: '#dfe2eb',
    onSurfaceVariant: '#c1c6d6',
    inverseSurface: '#dfe2eb',
    inverseOnSurface: '#2d3137',
    outline: '#8b909f',
    outlineVariant: '#414754',
    surfaceTint: '#acc7ff',

    primary: '#acc7ff',
    onPrimary: '#002f68',
    primaryContainer: '#498fff',
    onPrimaryContainer: '#00285b',
    inversePrimary: '#005bbf',

    secondary: '#d5bbff',
    onSecondary: '#41008b',
    secondaryContainer: '#5a21ab',
    onSecondaryContainer: '#c6a5ff',

    tertiary: '#74dd7e',
    onTertiary: '#003910',
    tertiaryContainer: '#3ba44d',
    onTertiaryContainer: '#00320d',

    error: '#ffb4ab',
    onError: '#690005',
    errorContainer: '#93000a',
    onErrorContainer: '#ffdad6',

    primaryFixed: '#d7e2ff',
    primaryFixedDim: '#acc7ff',
    onPrimaryFixed: '#001a40',
    onPrimaryFixedVariant: '#004492',

    secondaryFixed: '#ecdcff',
    secondaryFixedDim: '#d5bbff',
    onSecondaryFixed: '#270058',
    onSecondaryFixedVariant: '#5a21ab',

    tertiaryFixed: '#90fa97',
    tertiaryFixedDim: '#74dd7e',
    onTertiaryFixed: '#002106',
    onTertiaryFixedVariant: '#00531b',

    background: '#10141a',
    onBackground: '#dfe2eb',
    surfaceVariant: '#31353c',
  },

  typography: {
    headlineXl: {
      fontFamily: 'Inter',
      fontSize: '48px',
      fontWeight: '800',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
    },
    headlineLg: {
      fontFamily: 'Inter',
      fontSize: '32px',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.01em',
    },
    headlineLgMobile: {
      fontFamily: 'Inter',
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '1.2',
    },
    bodyMd: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.6',
    },
    codeSm: {
      fontFamily: 'JetBrains Mono',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '1.5',
    },
    labelCaps: {
      fontFamily: 'JetBrains Mono',
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '1',
      letterSpacing: '0.05em',
    },
  },

  rounded: {
    sm: '0.25rem',
    DEFAULT: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },

  spacing: {
    unit: '4px',
    gutter: '24px',
    marginDesktop: '64px',
    marginMobile: '16px',
    containerMax: '1280px',
  },
} as const

export type Theme = typeof theme
