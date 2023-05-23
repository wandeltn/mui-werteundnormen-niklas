// src/pages/Home.tsx

import React from "react";
import {Box, Typography, ThemeProvider, CssBaseline} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "../routes";
import MultipleCoice from "../components/MultipleChoice";
import theme from "../theme";

function Quiz() {
    return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography variant="h2">Quiz</Typography>
    </ThemeProvider>
    );
};

export default Quiz;