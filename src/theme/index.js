import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: "rgba(0, 0, 0, 0.87)",
      white: "#FFF",
      darkGray: "#292D35",
      yellow: "#FFCE1F",
    },
    primary: {
      orange: "#FDAF33",
      yellow: "#FEEF9F",
    },
    warning: {
      main: "#FFCE1F",
    },
    secondary: {
      main: "#A51013",
    },
    background: {
      default: "#02141D",
      darkBlue: "#02141D",
      blue: "#05354C",
      red: "#660F12",
    },
  },
  typography: {
    fontFamily: "'Inknut Antiqua', sans-serif",
    // fontFamily2: "'Nunito', sans-serif",
    body1: {
      fontSize: "14px",
    },
    body2: {
      fontSize: "12px",
      fontWeight: "600",
    },
    h1: {
      fontSize: "36px",
      fontWeight: "fontWeightBold",
    },
    h2: {
      fontSize: "32px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "600",
    },
    h4: {
      fontSize: "18px",
      fontWeight: "fontWeightBold",
    },
    h5: {
      fontSize: "14px",
      fontWeight: "600",
    },
    h6: {
      fontSize: "14px",
      fontWeight: "fontWeightBold",
    },
  },
});

export default theme;