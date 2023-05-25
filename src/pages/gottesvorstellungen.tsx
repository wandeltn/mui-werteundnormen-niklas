// src/pages/Home.tsx

import React, {ReactElement, FC} from "react";
import {Typography} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const Gottesvorstellungen: FC<any> = (): ReactElement => {
    return (
        <Grid container spacing={4} marginLeft="2vw" marginRight="2vw">
            <Grid xs={12}>
                <Typography variant="h2" textAlign="center">Gottesvorstellungen</Typography>
            </Grid>
            <Grid xs={12} sm={6}>
                <Card>
                    <CardMedia
                        sx={{height: 200}}
                        image="https://static.evangelisch.de/get/?daid=00010001b-XAM7iOD5qV6beW18HdlFXp7x00wL-PbwWcqNH803l2000000287063&dfid=i-62"
                        >
                    </CardMedia>
                    <CardContent>
                        Aus Respekt vor ihrem Gott, machen sie sich kein Bild über ihren Gott.
                        Das Bildverbot steht sogar im 2. Gebot der zehn Gebote. Für andere Religtionen
                        gilt dieses Bildverbot auch. Aus Respekt sprechen Juden und Judinnen den 
                        Namen ihres Gottes auch nicht aus. Aus diesem Grund gibt es viele andere
                        Namen die ihren Gott umschreiben, sowie "Der Ewige", oder "Adonai" d.h. 
                        "Mein Herr".
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={6}>
                <Card>
                    <CardMedia
                        sx={{height: 200}}
                        image="https://static.evangelisch.de/get/?daid=1c6b4a65ec0a6cd7a48d570c00001241&dfid=i-62">
                    </CardMedia>
                    <CardContent>
                        Hinter der Vorstellung eines göttlichen Gesetzes steht der Glaube, dass Gott 
                        mit seinem Volk einen Bund geschlossen hat - eine Überzeugung, die sich an 
                        zahlreichen Stellen der jüdischen heiligen Schriften findet: angefangen bei 
                        Abraham, Isaak und Jakob über Moses bis hin zu den Propheten. 
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Gottesvorstellungen;