import { Breadcrumbs, Typography, Box } from "@mui/material";
import React from "react";
import Link, { LinkProps } from '@mui/material/Link';
import { Link as RouterLink, useLocation } from "react-router-dom";
import { breadcrumbNameMap } from "../routes";

interface LinkRouterProps extends LinkProps {
    to: string;
    replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
    return <Link {...props} component={RouterLink as any} />;
}

function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Box paddingLeft="5vw" paddingTop="2vh">
            <Breadcrumbs>
                <LinkRouter underline="hover" color="inherit" to="/">
                    Home
                </LinkRouter>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to: string = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return last ? (
                        <Typography color="text.primary" key={to}>
                            {breadcrumbNameMap[to]}
                        </Typography>
                    ) : (
                        <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                            {breadcrumbNameMap[to]}
                        </LinkRouter>
                    );
                })}
            </Breadcrumbs>
        </Box>
    )
}

export default Breadcrumb;