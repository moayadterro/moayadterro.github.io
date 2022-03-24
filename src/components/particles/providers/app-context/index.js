import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// initial state
const initialState = { lang: "en", dir: "ltr" };

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const theme = createTheme({
    direction: state.dir,
    palette: {
      mode: "light",

      primary: {
        main: "#2867B2",
        dark: "#1565c0",
      },
      secondary: {
        main: "#2E2E2E",
      },
    },
    typography: {
      fontFamily: `Ubuntu`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ dir: state.dir }}>
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default AppContextProvider;

export const AppContext = React.createContext();
AppContext.displayName = "AppContext";
