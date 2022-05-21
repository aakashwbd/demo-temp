import React, {useEffect, useState} from 'react'

import {AppBar, Avatar, Container, Grid, IconButton, SwipeableDrawer, Toolbar} from "@mui/material";
import NavList from "./NavList";
import {useStyles} from "./styles";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false);

    const drawerHandler = (status) => {
        setOpen(status);
    };

    // const [show, setShow] = useState(false)
    //
    // window.addEventListener('scroll', function () {
    //     if (window.scrollY > 20) {
    //         setShow(!show)
    //     }
    // })

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            }
            else if(window.scrollY === 0) { // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);



return (
        <AppBar>
            <Toolbar>
                <Container maxWidth='lg'>
                    <Grid container justifyContent='space-between' alignItems='center'>
                        <Grid item xs={2} lg={2}>
                            <Avatar/>
                        </Grid>
                        <Grid item xs={1} lg={10}>
                            {show ? (
                                <>
                                    <IconButton
                                        onClick={() => drawerHandler(true)}
                                    >
                                        <MenuIcon fontSize="large"/>
                                    </IconButton>

                                    <SwipeableDrawer
                                        className={classes.drawer}
                                        anchor="left"
                                        open={open}
                                        onClose={() => drawerHandler(false)}
                                        onOpen={() => drawerHandler(true)}
                                    >
                                        <NavList/>
                                    </SwipeableDrawer>
                                </>
                            ) : <NavList/>}


                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
