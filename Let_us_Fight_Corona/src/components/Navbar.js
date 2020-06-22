import React from 'react';
import PropTypes from 'prop-types';
import Home from './HomeComponent';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
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
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Footer from './FooterComponent';

const drawerWidth = 240;

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
    },
    drawer: {
        [ theme.breakpoints.up( 'sm' ) ]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [ theme.breakpoints.up( 'sm' ) ]: {
            width: `calc(100% - ${ drawerWidth }px)`,
            marginLeft: drawerWidth,
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create( [ 'width', 'margin' ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            } ),
        },
    },
    menuButton: {
        marginRight: theme.spacing( 2 ),
        [ theme.breakpoints.up( 'sm' ) ]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing( 3 ),
    },
} ) );

function ResponsiveDrawer ( props )
{
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [ mobileOpen, setMobileOpen ] = React.useState( false );

    const handleDrawerToggle = () =>
    {
        setMobileOpen( !mobileOpen );
    };

    const drawer = (
        <div>
            <div className={ classes.toolbar } />
            <Divider />
            <List>
                <ListItem button key="Home">
                    <Link to="/home"><ListItemIcon>{ <HomeIcon /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./home' >
                        <ListItemText primary="Home" /></NavLink>
                </ListItem>
                <ListItem button key="Dashboard">
                    <Link to="/dashboard"><ListItemIcon>{ <DashboardIcon /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./dashboard' >
                        <ListItemText primary="Dashboard" /></NavLink>
                </ListItem>
                <ListItem button key="Test">

                    <Link to="/test"><ListItemIcon>{ < AssessmentIcon /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./test' >
                        <ListItemText primary="Test" /></NavLink>
                </ListItem>
                <ListItem button key="FAQs">
                    <Link to="/faqs"><ListItemIcon>{ <QuestionAnswerIcon /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./faqs' >
                        <ListItemText primary="FAQs" /></NavLink>
                </ListItem>
                <ListItem button key="Helpline">
                    <Link to="/help"> <ListItemIcon>{ <HelpIcon /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./help' >
                        <ListItemText primary="Helpline" /></NavLink>
                </ListItem>

                <ListItem button key="Essentials">
                    <Link to="/essentials"> <ListItemIcon>{ <AddShoppingCartIcon /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./essentials' >
                        <ListItemText primary="Essentials" /></NavLink>
                </ListItem>

                <ListItem button key="AboutUs">
                    <Link to="/aboutus"><ListItemIcon>{ <InfoIcon /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='/aboutus' >
                        <ListItemText primary="About us" /></NavLink>
                </ListItem>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={ classes.root }>
            <CssBaseline />
            <AppBar position="fixed" className={ classes.appBar }>
                <p />
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={ handleDrawerToggle }
                        className={ classes.menuButton }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" displayInline>
                        Let's Fight Corona
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={ classes.drawer } aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */ }

                <Hidden smUp implementation="css">
                    <Drawer
                        container={ container }
                        variant="temporary"
                        anchor={ theme.direction === 'rtl' ? 'right' : 'left' }
                        open={ mobileOpen }
                        onClose={ handleDrawerToggle }
                        classes={ {
                            paper: classes.drawerPaper,
                        } }
                        ModalProps={ {
                            keepMounted: true, // Better open performance on mobile.
                        } }
                    >
                        { drawer }
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={ {
                            paper: classes.drawerPaper,
                        } }
                        variant="permanent"
                        open
                    >
                        { drawer }
                    </Drawer>
                </Hidden>
            </nav>
            <main className={ classes.content }>
                <div className={ classes.toolbar } />
                <Typography paragraph>
                    <Home />
                </Typography>
                <Footer />
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
