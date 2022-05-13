import {makeStyles} from "@mui/styles";
import titleBg from '../../../images/banner/hi-background.png';
import bannerBg from '../../../images/banner/banner-bg.png'
import arrow from '../../../images/banner/b-mid-bottom.png'

export const useStyles = makeStyles(() => ({
    wrapper: {
        background: `url(${bannerBg}) no-repeat top center`
    },
    container: {
        padding: "80px 0px",
        border: '1px solid gray'
    },
    avatar: {
        "&.MuiAvatar-root": {
            width: '100%',
            height: '100%',
            maxWidth: 500,
            objectFit: 'contain !important',
            borderRadius: '0 !important'
        }
    },
    greetTitle: {
        background: `url(${titleBg})`,
        fontSize: 42,
        lineHeight: 73,
        textAlign: "center",
        fontWeight: 600,
        color: 'white',
        height: 73,
        width: 76,
        backgroundSize: '100% 100%',
        marginBottom: 0,
    },
    stringer: {
        fontSize: 52,
        color: '#0096ff',
        lineHeight: 52,
        fontWeight: 700,
        textTransform: 'capitalize',
        marginLeft: 30,
    },
    name: {
        color: 'white',
        fontSize: 86,
        lineHeight: 115,
        fontWeight: 800,
        textTransform: 'capitalize'
    },
    profession: {
        fontSize: 22,
        lineHeight: 30,
        fontWeight: 400,
        color: '#b1d3ff',
        textTransform: 'capitalize',
        letterSpacing: 5,
    },
    description: {
        fontSize: 16,
        lineHeight: 26,
        color: '#b1d3ff',
        fontWeight: 400,
        paddingTop: 60,
        paddingBottom: 45,
    },
    downloadCV: {
        fontSize: 16,
        fontWeight: 400,
        position: "relative",
        color: '#ffffff',
        marginLeft: 80,
        transition: 'all linear .3s',
        textDecoration: 'none',

        "&:before": {
            position: "absolute",
            width: 60,
            content: '" "',
            background: "#b1d3ff",
            height: 2,
            left: -80,
            top: '50%',
            transform: 'translateY(-50%)',
        }
    },

    socialIconContainer: {
        position: "relative",
        "&:before": {
            position: "absolute",
            width: 60,
            content: '" "',
            background: "#b1d3ff",
            height: 2,
            left: '30%',
            top: '50%',
            transform: 'translateY(-50%, -50%)',
        }
    },
    socialIcon: {
        color: 'white',
        fontSize: 16,
        padding: '0px 8px',

        "&:hover": {
            color: 'white'
        }
    },
    goDown: {
        width: 18,
        height: 30,
        border: '1px solid #ffffff',
        borderRadius: 35,
        position: "relative",
        left: '50%',
        transform: 'translateX(-50%)'
    },
    arrow: {
        background: `url(${arrow})`,
        height: "20px",
        width: "7px",
        backgroundPosition: "center center",
        backgroundSize: "100% 100%",
        position: "absolute",
        bottom: "-10px",
        left: "50%",
        transform: "translateX(-50%)",
    }
}))

