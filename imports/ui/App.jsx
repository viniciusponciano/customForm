import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  Grid,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  withWidth,
} from '@material-ui/core';
import { Business, ChevronLeft, ChevronRight, Menu } from '@material-ui/icons';
import SchoolList from "./schools/SchoolList";
import SchoolEdit from "./schools/SchoolEdit";

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex',
	},
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
		marginLeft: 12,
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
		width: theme.spacing.unit * 7 + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 9 + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
	},
});

class App extends React.Component {
	state = {
		open: false,
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
    const { classes, theme, width } = this.props;
    const { open } = this.state;
    return (
      <Router>
        <Grid className={classes.root} container spacing={24}>
          <CssBaseline/>
          <Grid item xs={12}>
            <AppBar
              position="fixed"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: this.state.open,
              })}
            >
              <Toolbar disableGutters={!this.state.open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, {
                    [classes.hide]: this.state.open,
                  })}
                >
                  <Menu />
                </IconButton>
                <Typography variant="h4" color="inherit" noWrap>
                  Custom Form
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={open ? 3 : 0} lg={open ? 2 : 1}>
            {!((width === 'sm' || width === 'md') && !open) &&
              <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                })}
                classes={{
                  paper: classNames({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                  }),
                }}
                open={this.state.open}
              >
                <div className={classes.toolbar}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRight/> : <ChevronLeft/>}
                  </IconButton>
                </div>
                <Divider/>
                <List>
                  <Link to="/">
                    <ListItem button key="schoolsOfCA">
                      <ListItemIcon><Business/></ListItemIcon>
                      <ListItemText primary="Schools of California"/>
                    </ListItem>
                  </Link>
                </List>
              </Drawer>
            }
          </Grid>
          <Grid item xs={open ? 9 : 12} lg={open ? 10 : 11}>
            <main className={classes.content}>
              <div className={classes.toolbar}/>

              <Route exact path="/" component={SchoolList}/>
              <Route path="/edit/:id" component={SchoolEdit}/>

            </main>
          </Grid>
        </Grid>
      </Router>
    );
  }
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles, { withTheme: true })(App));