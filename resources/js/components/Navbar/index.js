import {AppBar, Avatar, Box, Container, Grid, Toolbar} from "@mui/material";
import NavList from "./NavList";
import {useStyles} from "./styles";

const Navbar = () => {
    const classes = useStyles()
  return(
      <AppBar>
          <Toolbar>
              <Container maxWidth='lg'>
                  <Grid container alignItems='center'>
                      <Grid item xs={2}>
                          <Avatar/>
                      </Grid>
                      <Grid item xs={10}>
                          <NavList/>
                      </Grid>
                  </Grid>
              </Container>
          </Toolbar>
      </AppBar>
  )
}

export default Navbar;
