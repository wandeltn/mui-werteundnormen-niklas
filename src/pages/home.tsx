// src/pages/Home.tsx

import React, {ReactElement, FC} from "react";
import {Typography} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

const Home: FC<any> = (): ReactElement => {
    return (
        <Grid container spacing={4} marginLeft={"2vw"} marginRight={"2vw"}>
            <Grid xs={12}>
                <Typography variant="h2" textAlign={"center"}>Home</Typography>
            </Grid>
            <Grid xs={12} sm={6}>
                <Card>
                    <CardMedia 
                        sx={{height: 200}}
                        image="https://static.religionen-entdecken.de/get/?daid=00010001R__zaLMYuJUH7YVySRGRPYheaChg6uW_L7OrV3pcu5Jg000000277161&dfid=i-450"
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" textAlign={"left"}>
                            Für den Judentum gibt es nur einen Gott, der allein das ganze Universum für den Menschen geschaffen hat.
                            Dieser Gott ist immer da und lenkt mächtig und gültig die Welt. Er kennt die Geheimnisse der Menschen, 
                            belohnt und bestraft sie. Nach dem Glauben des Judentums ist das jüdische Folk auserwählt den Glauben
                            an ihren Gott auf der ganzen Erde zu verbreiten.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="gottesvorstellungen">Mehr lernen</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid xs={12} sm={6}>
                <Card>
                    <CardMedia
                        sx={{height: 200}}
                        image="https://image.geo.de/30089476/t/Pa/v3/w1440/r0/-/koscher-gross-jpg--43529-.jpg"
                        >
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" textAlign={"left"}>
                            Im Judentum gibt es bestimmte Vorraussetzungen für den Verzehr von Speisen. Nur Lebensmittel welche als 
                            Koscher deklariert wurden dürfen gegessen werden. Bei den Tieren dürfen nur Säugetiere, die sowohl Wiederkäuer
                            als auch gespaltene Hufe haben zu sich genommen werden. Fische dürfen dann gegessen werden, wnn sie sowohl 
                            Schuppen, als auch Flossen haben. Raubfische, Meeresfrüchte und Schalentiere sind jedoch verboten.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="essensvorschriften">Mehr lernen</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid xs={12} sm={4}>
                <Card>
                    <CardMedia
                        sx={{height: 200}}
                        image="https://static.evangelisch.de/get/?daid=00010001v3O1ty95_1d9jwsM9-Y0VAzZ3XfEQ1ucH40Hwn_OKoeN000000265653&dfid=i-62">
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" textAlign={"left"}>
                            Bei einem Juden sollte der Großteil des Körpers weitgehend bedeckt sein. Das heißt, dass auch bei sommerlich
                            warmen Wetter Hemden und Blusen mit langen Ärmeln getragen werden. Röcke bedecken grundsätzlich immer die Knie 
                            und Männer tragen lange Hosen.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="kleiderordnung">
                            Mehr lernen
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid xs={12} sm={4}>
                <Card>
                    <CardMedia
                        sx={{height: 200}}
                        image="https://static.religionen-entdecken.de/get/?daid=00010001qcTk5DO2ufbgwjrip5yJSFhcrzZ41aFXD59gWm37cujC000000316353&dfid=i-450">
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" textAlign={"left"}>
                            Normalerweise muss man um ein Jude zu sein, eine jüdische Mutter haben. Wenn dies aber nicht zutrifft, kann man
                            sich trotzdem durch formelle Aufnahmerituale offiziell zu einem Juden konvertieren. Dazu gehören unter anderem
                            für Männer die Beschneidung und für alle das Untertauchen in einem rituellen Tauchbad (Mikwe).
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="konvertierung">
                            Mehr lernen
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid xs={12} sm={4}>
                <Card>
                    <CardMedia
                        sx={{height: 200}}
                        image="https://www.planet-wissen.de/kultur/religion/judentum/tempxjudentumgebetgjpg100~_v-gseapremiumxl.jpg">
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" textAlign={"left"}>
                        Der jüdische Tag ist vom Aufstehen bis zum Schlafengehen durch religiöse Vorschriften strukturiert. 
                        Dabei mögen viele Regeln für andere wilkürlich wirken, sind aber für manche Juden überaus wichtig.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="">
                            Mehr lernen
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Home;