// src/pages/quellenverzeichnis.tsx

import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";

const Quellenverzeichnis: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'top'
        }}>
            <Typography variant="h2">
                Quellenverzeichnis
            </Typography>
        </Box>
    );
};

export default Quellenverzeichnis;