import React from "react";
import Content from "./components/Content";
import {ThemeProvider} from "@material-ui/styles";
import {createTheme} from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
}

export default App;
