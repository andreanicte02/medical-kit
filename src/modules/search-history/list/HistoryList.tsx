import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    Grid,
    InputAdornment, Link,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker/DatePicker";
import SearchIcon from "@mui/icons-material/Search";
import {EyePassword} from "../../../_chicken/components/EyePassword";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {dataPickersStyle, layoutStyle, searchBarStyle} from "../../../style/HistoryListStyle";

export const HistoryList = () => {


    return (
        <div>

            <Box sx={layoutStyle}>
                <Box sx={searchBarStyle}>
                    <TextField fullWidth
                               InputProps={{
                                   endAdornment:
                                       <InputAdornment position={"start"}>
                                           <SearchIcon/>
                                       </InputAdornment>
                               }}
                               label={"Busqueda"}

                    >

                    </TextField>
                </Box>

                <Box sx={dataPickersStyle}>

                    <DatePicker label={"Fecha inicio"} sx={{marginRight: "5px"}}/>

                    <DatePicker label={"Fecha fin"} sx={{marginLeft: "5px"}}></DatePicker>
                </Box>
            </Box>

            <Paper style={{marginTop: "15px"}}>

                <Accordion elevation={0} sx={{
                    "&:before": {
                        display: "none",
                    }
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                    >
                        <Typography>Name 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container>

                            <Grid item xs={6}>
                                <div style={{marginLeft: "10px"}}>
                                    Asunto: Dolor de estomago por tal y tal cosa
                                </div>
                            </Grid>
                            <Grid item xs={6}>

                                <div>
                                    Fecha:
                                    <Link sx={{marginLeft: "5px"}}>
                                        20/10/2023
                                    </Link>
                                </div>

                            </Grid>

                            <Grid item xs={6} marginTop={2}>
                                <div style={{marginLeft: "10px"}}>
                                    Asunto: Dolor de cabeza y tal cosa
                                </div>
                            </Grid>
                            <Grid item xs={6} marginTop={2}>

                                <div>
                                    Fecha:
                                    <Link sx={{marginLeft: "5px"}}>
                                        20/10/2023
                                    </Link>
                                </div>

                            </Grid>

                        </Grid>
                    </AccordionDetails>
                </Accordion>


                <Accordion elevation={0} sx={{
                    "&:before": {
                        display: "none",
                    }
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                    >
                        <Typography>Name 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container>

                            <Grid item xs={6}>
                                <div style={{marginLeft: "10px"}}>
                                    Asunto: Dolor de estomago por tal y tal cosa
                                </div>
                            </Grid>
                            <Grid item xs={6}>

                                <div>
                                    Fecha:
                                    <Link sx={{marginLeft: "5px"}}>
                                        20/10/2023
                                    </Link>
                                </div>

                            </Grid>

                            <Grid item xs={6} marginTop={2}>
                                <div style={{marginLeft: "10px"}}>
                                    Asunto: Dolor de cabeza y tal cosa
                                </div>
                            </Grid>
                            <Grid item xs={6} marginTop={2}>

                                <div>
                                    Fecha:
                                    <Link sx={{marginLeft: "5px"}}>
                                        20/10/2023
                                    </Link>
                                </div>

                            </Grid>

                        </Grid>
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </div>

    );
};