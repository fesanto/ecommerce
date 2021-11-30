import React from 'react';
import { ThemeProvider } from 'styled-components';

const themeDefault = {
  color: {
    c1a: "#151515",
    c1B: "#575757",
    c1c: "#A9A9A9",
    c1d: "#D1D1D1",
    c1e: "#EBEBEB",
    c1f: "#F5F5F5",
    c1g: "#F9F9F9",
    c1h: "#F9F9F9",
    c2a: "#6A983C",
    c2B: "#46760A",
    c2c: "#92C064",
    c2d: "#C8DEB3",
    c2e: "#F4F8EC",
    c3a: "#D0A866",
    c3b: "#B28A48",
    c3c: "#ECD2A6",
    c3d: "#FAEDD8",
    c3e: "#FFF9F0",
    c4a: "#E5704B",
    c4b: "#C7522D",
    c4c: "#EB8D70",
    c4d: "#F7C6B7",
    c4e: "#FFF1ED",
    c5a: "#37D0D6",
    c5b: "#19B2B8",
    c5c: "#7CD0D3",
    c5d: "#B9E6E8",
    c5e: "#ECF6F6",
  },

  font: {
    s1default: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "32px",
      lineHeight: "44.8px",
    },
    s1underline: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "32px",
      lineHeight: "44.8px",
      textDecoration: "underline",
    },
    s2default: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "26px",
      lineHeight: "39px",
    },
    s2underline: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "26px",
      lineHeight: "39px",
      textDecoration: "underline",
    },
    s3default: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "22px",
      lineHeight: "33px",
    },
    s3underline: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "22px",
      lineHeight: "33px",
      textDecoration: "underline",
    },
    s4default: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "24px",
    },
    s4underline: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "24px",
      textDecoration: "underline",
    },
    s5default: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "15px",
      lineHeight: "22px",
    },
    s5underline: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "15px",
      lineHeight: "22px",
      textDecoration: "underline",
    },
    s6default: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "18px",
    },
    s6underline: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "18px",
      textDecoration: "underline",
    }
  }
}

type ComponentsProviderProps = {
  theme?: {
    color: {
      c1a: string,
      c1B: string,
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