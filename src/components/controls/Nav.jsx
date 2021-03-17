import React from 'react';
import clsx from 'clsx';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom'; 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PlusIcon from '@material-ui/icons/AddCircle';
import GearIcon from '@material-ui/icons/Settings';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  root: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '2em',
    flexGrow: 5,
  },
  welcome: {
    fontSize: '1.5em',
    flexGrow: 1
  },
}));

function Nav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getHeading = () => {
    const tokens = pathname.split('/');
    // first token is empty, 2nd is path
    switch (tokens[1]) {
      case ('add'):
        return `ADD ENTRY`;
      case ('detail'):
        return `ENTRY DETAIL`;
      case ('settings'):
        return `SETTINGS`
      default:
        return `Welcome, ${user.username}!`;
    }
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {/* Only show menu if logged in */}
          {user.id && (
          <IconButton color="inherit" aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          )}

          <Typography variant="h1" className={classes.title}>
            My Japanese Study Tracker
          </Typography>

          {/* If logged in, show welcome message & Log Out */}
          {user.id && (
            <>
              <Typography variant="h2" className={classes.welcome}>
                { getHeading() }
              </Typography>
              <Button color="inherit" onClick={() => dispatch({ type: 'LOGOUT' })}>
                Log Out
              </Button>
            </>
          )}
          {/* If not logged in, show login/registration link */}
          {!user.id && (
            <Button color="inherit" onClick={() => {history.push('/login');}}>
              Login / Registration
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {user.id && (
      <Drawer variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
          <List>
            <ListItem button key="home" onClick={()=>history.push('/home')}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="add" onClick={()=>history.push('/add')}>
              <ListItemIcon><PlusIcon /></ListItemIcon>
              <ListItemText primary="Add Entry" />
            </ListItem>
            <ListItem button key="settings" onClick={()=>history.push('/settings')}>
              <ListItemIcon><GearIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
      </Drawer>
      )}
    </>
  );

}

export default Nav;
