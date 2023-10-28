import {ThemeProvider} from "@mui/material";
import React from "react";
import {theme} from "./_chicken/themes/theme";
import {Outlet} from "react-router-dom";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Outlet/>
                </div>
            </ThemeProvider>
        </LocalizationProvider>
    );
}

export default App;
