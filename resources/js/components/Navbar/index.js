import React, {useState} from 'react'

import {AppBar, Avatar, Box, Container, Grid, Hidden, IconButton, SwipeableDrawer, Toolbar} from "@mui/material";
import NavList from "./NavList";
import {useStyles} from "./styles";
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(false);

    const drawerHandler = (status) => {
        setOpen(status);
    };

  return(
      <AppBar>
          <Toolbar>
              <Container maxWidth='lg'>
                  <Grid container justifyContent='space-between' alignItems='center'>
                      <Grid item xs={2} lg={2}>
                          <Avatar/>
                      </Grid>
                      <Grid item xs={1} lg={10}>
                          <Hidden mdUp>
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
                          </Hidden>
                          <Hidden mdDown>
                              <NavList/>
                          </Hidden>
                      </Grid>
                  </Grid>
              </Container>
          </Toolbar>
      </AppBar>
  )
}

export default Navbar;
