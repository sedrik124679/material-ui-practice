import {useMemo, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import ColorModeContext from "./themeContext";

function ToggleColorMode({children}) {
    const [mode, setMode] = useState('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: [
                        'Sora',
                        'sanf-serif'
                    ].join(''),
                    fontWeightBold: 'bold',
                },
                palette: {
                    mode,
                    ...(mode === 'dark' && {
                        background: {
                            default: '#12122d',
                            paper: '#12122d',
                            box: '#20204f'
                        },
                        text: {
                            primary: '#f6f6f6',
                            linkColor: '#5d65ea'
                        },
                    }),
                    ...(mode === 'light' && {
                        background: {
                            default: '#f4e2e2',
                            paper: '#f4e2e2',
                            box: '#cecccc'
                        },
                        text: {
                            linkColor: '#5d65ea'
                        }
                    })
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default ToggleColorMode;