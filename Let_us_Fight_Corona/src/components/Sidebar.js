import React from 'react';
import clsx from 'clsx';
import Home from './HomeComponent';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';//home page
import InfoIcon from '@material-ui/icons/Info';//about us
import DashboardIcon from '@material-ui/icons/Dashboard';//graphs
import AssessmentIcon from '@material-ui/icons/Assessment';
import HelpIcon from '@material-ui/icons/Help';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link, NavLink } from 'react-router-dom';
const drawerWidth = 240;

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create( [ 'width', 'margin' ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        } ),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${ drawerWidth }px)`,
        transition: theme.transitions.create( [ 'width', 'margin' ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        } ),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create( 'width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        } ),
    },
    drawerClose: {
        transition: theme.transitions.create( 'width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        } ),
        overflowX: 'hidden',
        width: theme.spacing( 7 ) + 1,
        [ theme.breakpoints.up( 'sm' ) ]: {
            width: theme.spacing( 9 ) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing( 0, 1 ),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing( 3 ),
    },
} ) );

export default function MiniDrawer ()
{
    const classes = useStyles();
    const theme = useTheme();
    const [ open, setOpen ] = React.useState( false );

    const handleDrawerOpen = () =>
    {
        setOpen( true );
    };

    const handleDrawerClose = () =>
    {
        setOpen( false );
    };

    return (
        <div className={ classes.root }>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={ clsx( classes.appBar, {
                    [ classes.appBarShift ]: open,
                } ) }
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={ handleDrawerOpen }
                        edge="start"
                        className={ clsx( classes.menuButton, {
                            [ classes.hide ]: open,
                        } ) }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Let's fight Corona
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={ clsx( classes.drawer, {
                    [ classes.drawerOpen ]: open,
                    [ classes.drawerClose ]: !open,
                } ) }
                classes={ {
                    paper: clsx( {
                        [ classes.drawerOpen ]: open,
                        [ classes.drawerClose ]: !open,
                    } ),
                } }
            >
                <div className={ classes.toolbar }>
                    <IconButton onClick={ handleDrawerClose }>
                        { theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> }
                    </IconButton>
                </div>
                <Divider />
                <List>

                    <ListItem button key="Home">
                        <Link to="/home"><ListItemIcon>{ <HomeIcon /> }</ListItemIcon></Link>
                        <NavLink className="nav-link" to='./home' onClick={ handleDrawerClose }>
                            <ListItemText primary="Home" /></NavLink>
                    </ListItem>
                    <ListItem button key="Dashboard">
                        <Link to="/dashboard"><ListItemIcon>{ <DashboardIcon /> }</ListItemIcon></Link>
                        <NavLink className="nav-link" to='./dashboard' onClick={ handleDrawerClose }>
                            <ListItemText primary="Dashboard" /></NavLink>
                    </ListItem>
                    <ListItem button key="Test">

                        <Link to="/test"><ListItemIcon>{ < AssessmentIcon /> }</ListItemIcon></Link>
                        <NavLink className="nav-link" to='./test' onClick={ handleDrawerClose }>
                            <ListItemText primary="Test" /></NavLink>
                    </ListItem>
                    <ListItem button key="FAQs">
                        <Link to="/faqs"><ListItemIcon>{ <QuestionAnswerIcon /> }</ListItemIcon></Link>
                        <NavLink className="nav-link" to='./faqs' onClick={ handleDrawerClose }>
                            <ListItemText primary="FAQs" /></NavLink>
                    </ListItem>
                    <ListItem button key="Helpline">
                        <Link to="/help"> <ListItemIcon>{ <HelpIcon /> }</ListItemIcon></Link>
                        <NavLink className="nav-link" to='./help' onClick={ handleDrawerClose }>
                            <ListItemText primary="Helpline" /></NavLink>
                    </ListItem>

                    <ListItem button key="Essentials">
                        <ListItemIcon>{ <AddShoppingCartIcon /> }</ListItemIcon>
                        <ListItemText primary="Essentials" />
                    </ListItem>

                    <ListItem button key="AboutUs">
                        <Link to="/aboutus"><ListItemIcon>{ <InfoIcon /> }</ListItemIcon></Link>
                        <NavLink className="nav-link" to='/aboutus' onClick={ handleDrawerClose }>
                            <ListItemText primary="About us" /></NavLink>
                    </ListItem>

                </List>
            </Drawer>
            <main className={ classes.content }>
                <div className={ classes.toolbar } />
                <Typography paragraph>
                    <Home />
                </Typography>
            </main>
        </div>
    );
}
