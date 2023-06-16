import React from "react";
import Grid from "@mui/material/Unstable_Grid2"
import { 
    Card,
    CardActions,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Link
} from "@mui/material"

function Orte() {
    return(
        <Grid container spacing={4} marginLeft={"2vw"} marginRight={"2vw"}>
            <Grid xs={12}>
                <Typography variant="h2" textAlign={"center"}>
                    Orte
                </Typography>
            </Grid>
            <Grid xs={12} sm={4}>
                <Card>
                    <CardMedia
                        sx={{height: 200}}
                        image="https://cdn.laenderdaten.info/maps/religion/judentum.png">
                    </CardMedia>
                    <CardContent>
                        Das Judentum hat sich über die 3000 Jahre seit der Entstehung auf allen 
                        Regionen der Erde verbreitet. Jedoch lebt immernoch ein Großteil der 
                        Juden und Jüdinnen im Israel. Im Jahre 2020 waren es rund 6.77 Millionen
                        Menschen. Das Land mit der weltweit zweithöchsten Anzahl sind die USA, 
                        mit ihren 5.7 Millionen Juden und Jüdinnen. Weniger sind es jedoch in 
                        Europa, mit nur 1.15 Millionen Menschen in 2018. Davon lebten die meisten
                        von ihnen in Frankreich.
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} sm={8}>
                <Card>
                    <CardMedia
                        sx={{height: 280}}>
                    </CardMedia>
                    <CardContent>
                        Das Judentum kennt keine Missionierung, wodurch sie neue Mitglieder bekommen
                        könnte. Jüdinnen und Juden sind sich aber bewusst, dass die Gebote von Berg
                        Sinai nur für sie gelten. Wer diese Gebote halten möchte und Jüdin oder Jude
                        werden möchte, kann konvertieren. Das Lernen, um Jüdin oder Jude zu werden, 
                        ist jedoch langwierig und schwierig. Deshalb ist das Judentum eine kleine 
                        Religionsgemeinschaft. Sie ist aber sehr bedeutungsvoll, denn Christentum 
                        und Islam entwickelten sich aus dem Judentum.
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} sm={8}>
                <Card>
                    <CardMedia
                        sx={{height: 200}}>
                    </CardMedia>
                    <CardContent>
                        Den Staat Israel gibt es tatsächlich noch gar nicht so lange. Der Staat der
                        Juden wurde erst 1948 Gegründet. Am 14. Mai des Jahres, um 16 Uhr versammelten
                        sich der Jüdische Nationalrat und verklärte die Unabhängikeit. Nur elf Minuten
                        später erkannte der damalige Präsident der USA Harry S. Truman den neuen Staat
                        an. Ein paar Tage danach erkannte auch die Sowjetunion und die Tschechoslowakei
                        den neuen Staat an. Der Jahrestag der Gründung wird den ganzen fünften Monat
                        des jüdischen Kalenders gefeiert. Dieser geht etwa vom 20 April, bis zum 20 Mai.
                        Nicht alle Länder nahmen die Unabhängikeit jedoch direkt an. Noch in der 
                        Gründungsnacht erklärten Ägypten, Saudi-Arabien, Transjordanien, der Libanon,
                        der Irak und Syrien dem neuen Staat den Krieg. Dieser hielt aber nicht lang an,
                        bis sie ein Waffenstillstandsabkommen unterzeichneten. 
                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} sm={4}>
                <Card>
                    <CardMedia
                        sx={{height: 200}}>
                    </CardMedia>
                    <CardContent>
                        Israel ist das einzige Land auf der Welt, in dem das Judentum mehr Anhängende
                        hat als andere Religionen. In allen anderen Ländern leben Juden und Jüdinnen´
                        als <Link href="/orte/diaspora">Diaspora</Link>. So nennt man das Leben einer Minderheit unter sehr vielen 
                        Andersgläubigen. In diesen anderen Ländern ist das Christentum oder zum Beispiel
                        der Islam mehr verbreitet.
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Orte;