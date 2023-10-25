import {createTheme} from "@mui/material";

export const theme = createTheme(({
    typography: {
        fontFamily: "Roboto, sans-serif",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
    },
    breakpoints:{
        values:{
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1500,
        }
    }

}));