import {List, ListItem, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useStyles} from "./styles";




const NavList = () => {
    const classes = useStyles()
    const listItem = [
        {
            path: '/',
            title: 'home',
        },
        {
            path: '/about',
            title: 'about me',
        },
        {
            path: '/service',
            title: 'service',
        },
        {
            path: '/portfolio',
            title: 'portfolio',
        },
        {
            path: '/achievement',
            title: 'achievements',
        },
        {
            path: '/client',
            title: 'clients',
        },
        {
            path: '/blog',
            title: 'blogs',
        },
        {
            path: '/hire-me',
            title: 'hire me',
        }
    ]
    return (
        <List className={classes.navList}>
            {
                listItem.map((item, key)=>(
                    <NavLink to={item.path} key={key}>
                        <ListItem>
                            <ListItemText>{item.title}</ListItemText>
                        </ListItem>
                    </NavLink>
                ))
            }
        </List>
    )
}

export default NavList
