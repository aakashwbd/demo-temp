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
        },


        "@media(max-width: 600px)": {
            flexDirection: "column",
            alignItems: "start",

            "& a":{
                color: 'black',
            },
        },
    },


    drawer: {
        zIndex: 999999999999,
        "& .MuiDrawer-paper": {
            width: 200,
            // paddingTop: 80,

        },
    },
}))

