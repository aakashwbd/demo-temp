import {Avatar, Box, Container, Grid, ListItem, ListItemText, Typography} from "@mui/material";
import {useStyles} from "./styles";
import ProfileAvatar from '../../../images/banner/right-image.png';
import {NavLink} from "react-router-dom";
import {Icon} from '@iconify/react';

const socialIcons = [
    {
        path: '/fb',
        iconifyIcon: "cib:linkedin-in"
    },
    {
        path: '/dr',
        iconifyIcon: "icon-park-outline:dribble"
    },
    {
        path: '/',
        iconifyIcon: "akar-icons:twitter-fill"
    },
    {
        path: '/',
        iconifyIcon: "bxl:pinterest-alt"
    },
    {
        path: '/',
        iconifyIcon: "cib:facebook-f"
    },
]

const Home = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapper}>
            <Container maxWidth='lg' className={classes.container}>
                <Grid container alignItems='center'>
                    <Grid item xs={6}>
                        <Typography variant='h2' className={classes.greetTitle}>
                            Hi
                        </Typography>
                        <Typography variant='h2' className={classes.stringer}>
                            Stringer!
                        </Typography>
                        <Typography variant='h4' className={classes.name}>
                            I'm Abu Ehsan Rupom!
                        </Typography>
                        <Typography variant='h4' className={classes.profession}>
                            Fullstack Developer
                        </Typography>
                        <Typography variant='body2' className={classes.description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, odit.
                        </Typography>


                        <NavLink to='/cv' className={classes.downloadCV}>
                            Download CV
                        </NavLink>
                    </Grid>
                    <Grid item xs={6}>
                        <Avatar src={ProfileAvatar} className={classes.avatar}/>
                    </Grid>
                    <Grid item xs={4}>
                        <NavLink to='/cv' className={classes.downloadCV}>
                            View Portfolio
                        </NavLink>
                    </Grid>
                    <Grid item xs={4} textAlign='center'>
                        <Box className={classes.goDown}>

                            {/*<Animate*/}
                            {/*    appear="fadeInDown"*/}
                            {/*    durationAppear={1000}*/}
                            {/*    component="div" >*/}
                            {/*    <Box className={classes.arrow}></Box>*/}
                            {/*</Animate>*/}

                        </Box>
                    </Grid>
                    <Grid item xs={4} textAlign='end'>
                        <Box className={classes.socialIconContainer}>
                            {
                                socialIcons.map((item, key)=>(
                                    <NavLink to={item.path} key={key} className={classes.socialIcon}>
                                        <Icon icon={item.iconifyIcon} />
                                    </NavLink>
                                ))
                            }
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default Home;
