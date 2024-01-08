import { Box, Typography } from "@mui/material";
import { LogoIcon } from "../components/LogoIcon";

export function MainPage ({logo})
{
    return (
        <Box>
            <Box 
                component="header"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography>Calculadora</Typography>
                <LogoIcon src={logo} alt="logo" />
            </Box>
            <Box component="main">
    
            </Box>
        </Box>
    );
}