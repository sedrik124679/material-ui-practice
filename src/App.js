import {
    Container,
    Paper,
} from "@mui/material";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import React, {useState} from 'react';
import ToggleColorMode from "./Context/ThemeState";
import CardBlock from "./components/CardBlock/CardBlock";

const App = () => {

    const [data, setData] = useState([])
    console.log(data)

    return (
        <ToggleColorMode>
            <Paper sx={{minHeight: '100vh', borderRadius: '0'}}>
                <Container>
                    <Header />
                    <SearchBar setData={ setData }/>
                    <CardBlock data={ data }/>
                </Container>
            </Paper>
        </ToggleColorMode>
    );
};

export default App;