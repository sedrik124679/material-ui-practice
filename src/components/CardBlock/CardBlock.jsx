import React from 'react';
import {Avatar, Box, Card, CardContent, CardMedia, IconButton, Typography, useTheme} from "@mui/material";
import dayjs from "dayjs";
import {Link, LocationCity, LocationOn, Twitter} from "@mui/icons-material";

const CardBlock = ({data}) => {

    const theme = useTheme()

    if (data.length === 0) {
        return <h1>aboba</h1>
    }

    console.log(dayjs(data.created_at).$d.toString())

    return (
        <Card sx={{
            background: theme.palette.background.box,
            display: 'flex',
            borderRadius: 3,
            width: '70%',
            m: '0 auto',
            mt: '2rem',
            p: 2
        }}>
            <CardMedia sx={{width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
                <Avatar src={data.avatar_url} sx={{width: '100px', height: '100px'}}/>
            </CardMedia>
            <CardContent sx={{width: '100%'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box>
                        <Typography>{data.name}</Typography>
                        <Typography sx={{color: theme.palette.text.linkColor}}>@{data.login}</Typography>
                    </Box>
                    <Typography>Joined {dayjs(data.created_at).$d.toString().split(' ')[2]} {dayjs(data.created_at).$d.toString().split(' ')[1]} {dayjs(data.created_at).$d.toString().split(' ')[3]}</Typography>
                </Box>
                <Box sx={{mt: '1rem'}}>
                    <Typography>
                        {data.bio ? data.bio : 'This profile has no bio'}
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    background: theme.palette.background.paper,
                    borderRadius: 5,
                    p: 1.6,
                    mt: '2rem'
                }}>
                    <Box>
                        <Typography>Repos</Typography>
                        <Typography sx={{fontWeight: theme.typography.fontWeightBold}}>{data.public_repos}</Typography>
                    </Box>
                    <Box>
                        <Typography>Followers</Typography>
                        <Typography sx={{fontWeight: theme.typography.fontWeightBold}}>{data.followers}</Typography>
                    </Box>
                    <Box>
                        <Typography>Following</Typography>
                        <Typography sx={{fontWeight: theme.typography.fontWeightBold}}>{data.following}</Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', mt: '2rem'}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <IconButton disabled={data.location ? false : true}>
                                <LocationOn/>
                                <Typography>{data.location ? data.location : 'Not available'}</Typography>
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton disabled={data.twitter_username ? false : true}>
                                <Twitter/>
                                <Typography>{data.twitter_username ? data.twitter_username : 'Not available'}</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <IconButton>
                                <Link/>
                                <Typography>
                                    {data.html_url}
                                </Typography>
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton disabled={data.blog ? false : true}>
                                <LocationCity/>
                                <Typography>{data.blog ? data.blog : "Not available"}</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CardBlock;