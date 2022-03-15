import React, {useState} from 'react';
import {
    Button,
    InputAdornment,
    TextField,
    useTheme
} from "@mui/material";
import {Search} from "@mui/icons-material";
import axios from "axios";
import {API_SEARCH} from "../../http";

const SearchBar = ({setData}) => {

    const [searchQuery, setSearchQuery] = useState('')

    const handler = async (searchQuery) => {
        try {
            const response = await axios.get(`${API_SEARCH}${searchQuery}`)
            setData(response.data)
        } catch (e) {
            console.log(e)
            setData([])
        }
    }

    const theme = useTheme();

    return (
        <TextField
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            sx={{background: theme.palette.background.box, mt: '2rem'}}
            placeholder={'Search GitHub username...'}
            variant={"outlined"}
            fullWidth
            InputProps={{
            startAdornment:
                <InputAdornment
                    position="start"
                    color={'primary'}>
                    <Search
                        color={'primary'}/>
                </InputAdornment>,
            endAdornment:
                <Button
                    onClick={() => handler(searchQuery)}
                    variant={'contained'}
                    size={'large'}
            >Search</Button>
        }}/>
    );
};

export default SearchBar;