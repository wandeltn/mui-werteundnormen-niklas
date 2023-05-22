// src/pages/Home.tsx

import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "../routes";
import theme from "../theme";

function Quiz() {
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        
    </ThemeProvider>
    );
};

export default Quiz;