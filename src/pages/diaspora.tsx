import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
    Typography,
    Card,
    CardContent
} from "@mui/material"

function Diaspora() {
    return (
        <Grid 
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
        >
            <Grid xs={12}>
                <Typography 
                    variant="h2"
                    textAlign="center"
                >
                    Diaspora
                </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
                <Card>
                    <CardContent>
                        Das griechische Wort "Diaspora" bedeutet: Verstreuung. Damit ist die "Verstreuung" oder Verteilung 
                        von Menschen gemeint, die in Gruppen nicht dort leben, wo sie ursprünglich herkommen. Das passierte 
                        früher oft, weil Menschen nach verlorenen Kriegen von dort vertrieben wurden, wo sie lebten.
                    </CardContent>
                    <CardContent>
                        Das ist zum Beispiel auch Jüdinnen und Juden vor vielen tausend Jahren passiert. Nach der zweiten 
                        Zerstörung ihres Tempels in Jerusalem hat der babylonische König Nebukadnezar II. viele Jüdinnen und 
                        Juden in seine Hauptstadt Babylon verschleppen lassen. Einige Jüdinnen und Juden konnten aber auch 
                        fliehen und sich weit weg in Ägypten in Sicherheit bringen. Andere haben sich irgendwo rund ums 
                        Mittelmeer niedergelassen.
                    </CardContent>
                    <CardContent>
                        Über viele hundert Jahre lebten sie dort in kleinen Siedlungen, fern von ihrer Heimat. In ihrer 
                        Nachbarschaft gab es Dörfer, in denen die Menschen andere Feste feierten, andere Bräuche und andere 
                        Werte hatten. Diese Menschen und ihre Vorfahren lebten schon immer dort, während die Jüdinnen und Juden 
                        dorthin geflohen waren.
                    </CardContent>
                    <CardContent>
                        Umgeben von Menschen, die eine völlig andere Geschichte, Nationalität, Kultur und Religion hatten, 
                        lebten sie also in ihren kleinen Siedlungen in der „Diaspora“. Also sie lebten nicht da, wo sie 
                        ursprünglich herkommen.
                    </CardContent>
                    <CardContent>
                        Heute ist auch von einem Leben in der Diaspora die Rede, wenn Jüdinnen und Juden oder andere Gruppen 
                        als Minderheit dauerhaft in einem anderen Land leben als ihrem Herkunftsort.
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Diaspora;