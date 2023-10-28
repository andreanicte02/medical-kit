import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    InputAdornment,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker/DatePicker";
import SearchIcon from "@mui/icons-material/Search";
import {EyePassword} from "../../../_chicken/components/EyePassword";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const HistoryList = () => {


    return (
        <div>

            <div>
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
            </div>

            <div style={{marginTop: "15px", display: "flex"}}>

                <DatePicker label={"Fecha inicio"} sx={{marginRight: "5px"}}/>

                <DatePicker label={"Fecha fin"} sx={{marginLeft: "5px"}}></DatePicker>
            </div>

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
                        <div style={{marginLeft: "10px"}}>
                            <div>
                                Dpi: 1234123123123
                            </div>
                            <div style={{marginTop: "10px"}}>
                                Asunto: Dolor de estomago por tal y tal cosa
                            </div>


                            <div style={{marginTop: "10px"}}>
                                Resumen: El paciente inicio con dolor de de estomago y procisigo a tener los siguientes sintomas
                            </div>


                            <div style={{marginTop: "10px"}}>
                                Tratamiento: Paracetamol 5mg
                            </div>

                            <div style={{marginTop: "10px"}}>
                                Fecha: 20/10/2023
                            </div>


                        </div>
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
                        <div style={{marginLeft: "10px"}}>
                            <div>
                                Dpi: 1234123123123
                            </div>
                            <div style={{marginTop: "10px"}}>
                                Asunto: Dolor de estomago por tal y tal cosa
                            </div>


                            <div style={{marginTop: "10px"}}>
                                Resumen: El paciente inicio con dolor de de estomago y procisigo a tener los siguientes sintomas
                            </div>


                            <div style={{marginTop: "10px"}}>
                                Tratamiento: Paracetamol 5mg
                            </div>

                            <div style={{marginTop: "10px"}}>
                                Fecha: 20/10/2023
                            </div>


                        </div>
                    </AccordionDetails>
                </Accordion>

            </Paper>
        </div>

    );
};