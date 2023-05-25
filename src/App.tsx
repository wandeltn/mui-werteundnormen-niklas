// src/App.tsx

import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/NavBar";
import theme from "./theme";
import Breadcrumb from "./components/Breadcrumb";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <Router>
          <Navbar />
          <Breadcrumb />
          <Routes>
            {appRoutes.map((routeList) => (
              routeList.map((route) => {
                return (
                  <Route
                    key={route.key}
                    path={route.path}
                    element={<route.component />}
                  />
                )
              })
            ))}
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;