import { ThemeProvider } from "@mui/material";
import React from "react";
import {theme} from "./_chicken/themes/theme";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Outlet/>
            </div>
        </ThemeProvider>
    );
}

export default App;
