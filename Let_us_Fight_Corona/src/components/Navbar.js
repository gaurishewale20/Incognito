import React from 'react';
import PropTypes from 'prop-types';
import Home from './HomeComponent';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';//home page
//import InfoIcon from '@material-ui/icons/Info';//about us
import DashboardIcon from '@material-ui/icons/Dashboard';//graphs
import AssessmentIcon from '@material-ui/icons/Assessment';
import HelpIcon from '@material-ui/icons/Help';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Footer from './FooterComponent';
import ScrollToTop from './ScrollTotop';

const drawerWidth = 240;

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: 'flex',
        /* 1 backgroundColor: 'silver'*/
        backgroundColor: '8c8d8f',
    },
    drawer: {
        [ theme.breakpoints.up( 'sm' ) ]: {
            width: drawerWidth,
            flexShrink: 0,

        },
    },
    appBar: {
        // for let's fight corona header! -- 1  backgroundColor: 'darkslategray',
        // ab1 backgroundColor: '#1c0118', // 1C0118
        // ab1 backgroundImage: 'linear-gradient(90deg, #1c0118 30%, #ffffff 100%)',
        //backgroundColor: '#233B57',
        //backgroundImage: 'linear-gradient(100deg, #233B57 60%, #ffffff 100%)',

        //  background: "linear-gradient(to right, rgb(130, 32, 143), rgb(170, 109, 179),rgb(247, 169, 250))"
        background: "linear-gradient(to right, #004d4d 50% , #00a3a3)",

        // ab3 backgroundColor: '#333630',
        // ab3 backgroundImage: 'linear-gradient(90deg, #333630 30%, #ffffff 100%)',
        // default backgroundColor: '#373a42',

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
        "&:focus": {
            outline: 'none',
        },
        [ theme.breakpoints.up( 'sm' ) ]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    //linear-gradient(rgb(130, 32, 143),rgb(247, 169, 250), rgb(170, 109, 179))
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        // 1 backgroundColor: '#ccffcc',
        // 2 backgroundColor: '#ffd6ba',
        // 3 backgroundColor: '#7EF1C1',
        // gr1 backgroundColor: '#fbab7e',
        //gr1 backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
        // gr2 backgroundColor: '#fee140',
        // gr2 backgroundImage: 'linear-gradient(180deg, #FEE140 0%, #FA709A 100%);',
        //backgroundColor: '#74ebd5',
        // backgroundImage: ' linear-gradient(160deg, #ffffff 40%, #9FACE6 100%)',
        // gr4 backgroundColor: '#ffdee9',
        // gr4 backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
        // gr5  backgroundColor: '#FFFB7D',
        // gr5  backgroundImage: ' linear-gradient(0deg, #85FFBD 0%, #FFFB7D 100%)',
        //backgroundColor: 'FFFFFF',
        //backgroundImage: 'linear-gradient(180deg, #FFFFFF 10%, #FFdde1 100%)',
        width: drawerWidth,
        //background: "linear-gradient(rgb(255, 255, 255), rgb(135, 135, 236))",
        // gauri's og background: "linear-gradient(#fff,#7cbef8)",
         background: "linear-gradient(#111,#003b46)",
        //background: "linear-gradient(#fff, #5bc8ac)",


    },
    content: {
        // 1 backgroundColor: 'silver',
        //  backgroundColor: '#aeafd1',
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

    const text = {
        color: "#fff",
        fontSize: 17 
    };
    

    const drawer = (
        <div>
            <div className={ classes.toolbar } />

            <List>
                <ListItem button key="Home" >
                    <Link to="/home"><ListItemIcon>{ <HomeIcon style={{ color: "white", fontSize: 25 }} /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./home' >
                        <ListItemText primaryTypographyProps={{ style: text  }} primary="Home" /></NavLink>
                </ListItem>
                <ListItem button key="Dashboard">
                    <Link to="/dashboard"><ListItemIcon> { <DashboardIcon style={{ color: "white", fontSize:  25 }}/> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./dashboard' >
                        <ListItemText primaryTypographyProps={{ style: text }} primary="Dashboard" /></NavLink>
                </ListItem>
                <ListItem button key="Symptoms">
                    <Link to="/symptoms"><ListItemIcon>{ <WbSunnyOutlinedIcon style={{ color: "white", fontSize:  25 }} /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./symptoms' >
                        <ListItemText primaryTypographyProps={{ style: text }} primary="Symptoms" /></NavLink>
                </ListItem>
                <ListItem button key="Precautions">
                    <Link to="/precautions"><ListItemIcon>{ <SecurityOutlinedIcon style={{ color: "white", fontSize:  25 }} /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./Precautions' >
                        <ListItemText primaryTypographyProps={{ style: text }} primary="Precautions" /></NavLink>
                </ListItem>
                <ListItem button key="Test">

                    <Link to="/test"><ListItemIcon>{ < AssessmentIcon style={{ color: "white", fontSize:  25 }}/> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./test' >
                        <ListItemText primaryTypographyProps={{ style: text }} primary="Test" /></NavLink>
                </ListItem>
                <ListItem button key="FAQs">
                    <Link to="/faqs"><ListItemIcon>{ <QuestionAnswerIcon style={{ color: "white", fontSize:  25 }} /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./faqs' >
                        <ListItemText primaryTypographyProps={{ style: text }} primary="FAQs and Process" /></NavLink>
                </ListItem>
                <ListItem button key="Helpline">
                    <Link to="/help"> <ListItemIcon>{ <HelpIcon style={{ color: "white", fontSize:  25 }} /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./help' >
                        <ListItemText primaryTypographyProps={{ style: text }} primary="Helpline" /></NavLink>
                </ListItem>

                <ListItem button key="Essentials">
                    <Link to="/essentials"> <ListItemIcon>{ <AddShoppingCartIcon style={{ color: "white", fontSize:  25 }} /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='./essentials' >
                        <ListItemText primaryTypographyProps={{ style: text }} primary="Essentials" /></NavLink>
                </ListItem>

              {/*<ListItem button key="AboutUs">
                    <Link to="/aboutus"><ListItemIcon>{ <InfoIcon style={{ color: "white"}} /> }</ListItemIcon></Link>
                    <NavLink className="nav-link" to='/aboutus' >
                        <ListItemText primaryTypographyProps={{ style: text }} primary="About us" /></NavLink>
    </ListItem> */  }

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={ classes.root }>
            <CssBaseline />
            <AppBar position="fixed" className={ classes.appBar }>

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
                    <Typography variant="h5">
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
                <Typography component={ 'span' } varient={ 'body2' }>
                    <Home />
                    <ScrollToTop /><br />
                    <Footer />
                </Typography>
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
