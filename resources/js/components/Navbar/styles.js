import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(()=>({
    navList: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        textTransform: 'uppercase',

        "& a":{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bolder'
        }
    }
}))

