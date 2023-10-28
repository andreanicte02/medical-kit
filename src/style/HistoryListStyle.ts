import {theme} from "../_chicken/themes/theme";

export const layoutStyle = {

    [theme.breakpoints.up("md")]: {
        display:"flex",
        flex:1

    }

}

export const dataPickersStyle ={

    marginTop: "15px",
    display: "flex",


    [theme.breakpoints.up("md")]: {
        marginTop: "0px",
    }
}

export const searchBarStyle ={


    [theme.breakpoints.up("md")]: {
        display: "flex",
        flex:1,
        marginRight: "15px"
    }

}