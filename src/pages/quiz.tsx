// src/pages/Home.tsx

import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {
    Typography,
    CardContent,
    FormControl,
    Select,
    FormGroup,
    MenuItem,
    FormLabel,
    FormControlLabel,
    Radio,
    FormHelperText,
    RadioGroup
} from "@mui/material";

function Quiz() {
    return (
        <Grid container spacing={4} marginLeft="2vw" marginRight="2vw">
            <Grid xs={12}>
                <Typography variant="h2" textAlign="center">Aufgaben</Typography>
            </Grid>
            <Grid>
                <FormControl variant="filled" margin="normal" sx={{ width: '100%', marginTop: 2 }}>
                    <FormGroup row sx={{ justifyContent: 'space-around' }}>

                        <RadioGroup row={false} sx={{ minWidth: 300 }}>
                            <FormLabel component="legend">Form Switch</FormLabel>

                            <FormControlLabel
                                control={
                                <Radio
                                    name="switch1"
                                />
                                }
                                label="Switch 1"
                            />
                            <FormControlLabel
                                control={
                                <Radio
                                    name="switch2"
                                />
                                }
                                label="Switch 2"
                            />
                            <FormControlLabel
                                control={
                                <Radio
                                    name="switch3"
                                />
                                }
                                label="Switch 3"
                            />
                        <FormHelperText>Radio Group</FormHelperText>
                    </RadioGroup>
                    </FormGroup>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default Quiz;