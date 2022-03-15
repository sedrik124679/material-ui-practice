import React, {useContext} from 'react';
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {LightMode, Nightlight} from "@mui/icons-material";
import ColorModeContext from "../../Context/themeContext";

const Header = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'text.primary',
                borderRadius: 1,
            }}
        > <Typography variant={'h5'} component={'h3'}>EugeneKrabs</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography
                    variant={'subtitle1'}
                    component={'h6'}
                    sx={{
                        textTransform: 'upperCase',
                        alignSelf: 'center'
                    }}
                >{theme.palette.mode}</Typography>
                <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Nightlight/> : <LightMode/>}
                </IconButton>
            </Box>
        </Box>
    );
};

export default Header;