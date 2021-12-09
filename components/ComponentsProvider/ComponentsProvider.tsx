import React from 'react';
import themeDefault from '../../theme/theme';
import { ThemeProvider } from 'styled-components';

type ComponentsProviderProps = {
  theme?: {
    color: {
      c1a: string,
      c1B: string,
      c1c: string,
      c1d: string,
      c1e: string,
      c1f: string,
      c1g: string,
      c1h: string,
      c2a: string,
      c2B: string,
      c2c: string,
      c2d: string,
      c2e: string,
      c3a: string,
      c3b: string,
      c3c: string,
      c3d: string,
      c3e: string,
      c4a: string,
      c4b: string,
      c4c: string,
      c4d: string,
      c4e: string,
      c5a: string,
      c5b: string,
      c5c: string,
      c5d: string,
      c5e: string,
    },
    font: { 
      s1default: string,
      s1underline: string,
      s2default: string,
      s2underline: string,
      s3default: string,
      s3underline: string,
      s4default: string,
      s4underline: string,
      s5default: string,
      s5underline: string,
      s6default: string,
      s6underline: string,
    }
  }
}

export const ComponentsProvider: React.FC<ComponentsProviderProps> = ({ children, theme = themeDefault }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
