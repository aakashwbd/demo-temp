import {makeStyles} from "@mui/styles";
import titleBg from '../../../images/banner/hi-background.png'

export const useStyles = makeStyles(()=>({
    wrapper: {
        padding: "80px 0px",
        border: '1px solid gray'
    },
    avatar:{
        "&.MuiAvatar-root":{
            width: '100%',
            height: '100%',
            maxWidth: 500,
            objectFit: 'contain !important',
            borderRadius: '0 !important'
        }
    },
    greetTitle: {
        position: 'relative',

        '&::after': {
            content: "''",
            width: '100%',
            height: '100%',
            maxWidth: 100,
            background: `url(${titleBg}) no-repeat top center`,
            backgroundSize: 'contain',
            position: 'absolute',
            bottom: 0,
            left:0,
            zIndex: -11
        }
    }
}))

