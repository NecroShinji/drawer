import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DrawerEpisodeItem from './DrawerEpisodeItem';
import './App.scss';

const drawerHeight = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },

  drawer: {
    height: drawerHeight,
    flexGrow: 480,
  },
  drawerPaper: {
    height: drawerHeight,
    flexGrow: 480,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center-bottom',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginBottom: drawerHeight,
  },
  contentShift: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginBottom: 480,
  },
}));

export default function PersistentDrawerBottom() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="bottom"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'utd' ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            
          </IconButton>
        </div>
       
        <List>
        <div className="drawer-episode-title">
          <strong>Episode</strong>
          <i>icon</i>
          <em>Politics of Hair</em>
        </div>
        
        <div className="drawer-episode-meta">
          <strong>See All</strong>
          <em>14 Stories</em>
          <i></i>
      
        </div>
          
        </List>
        <Divider />
        <ul>
        <DrawerEpisodeItem />
        <DrawerEpisodeItem />
        <DrawerEpisodeItem />
        <DrawerEpisodeItem />
        <DrawerEpisodeItem />
      </ul>
      </Drawer>

    </div>
  );
}
