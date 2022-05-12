import {Avatar, Container, Grid, Typography} from "@mui/material";
import {useStyles} from "./styles";

import ProfileAvatar from '../../../images/banner/right-image.png';

const Home = () => {

    const classes = useStyles()
    return (
        <Container maxWidth='lg' className={classes.wrapper}>
            <Grid container alignItems='center'>
                <Grid item xs={6}>
                    <Typography variant='h2' className={classes.greetTitle}>
                        Hi
                    </Typography>
                    <Typography variant='h6'>
                        Strainger!
                    </Typography>
                    <Typography variant='h4'>
                        I'm Abu Ehsan Rupom!
                    </Typography>
                    <Typography variant='body1'>
                        Fullstack Developer
                    </Typography>
                    <Typography variant='body2'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, odit.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Avatar src={ProfileAvatar} className={classes.avatar}/>
                </Grid>
            </Grid>
            Hello Home Page
        </Container>
    )
}

export default Home;
