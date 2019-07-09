import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
    Checkbox,
    FormControl,
    FormGroup
} from '@material-ui/core';
const DrawerWrapper = (props) => {
    const { 
        classes, 
        theme, 
        open, 
        handleFitur,
        handleFiturExtra,
        handleFiturAll,
    } = props;
    const {
        tokenize,
        stemming,
        stopword,
        ner,
        neural,
        semua,
    } = props.fitur;
    const {
        search
    } = props.extra;
  return (
    <div>
          <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="right"
              open={open}
              classes={{
                  paper: classes.drawerPaper,
              }}
          >
              <div className={classes.drawerHeader}>
                  {/* <IconButton onClick={handleDrawerClose}>
                      {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton> */}
                  <List>
                      <ListItem>
                          <ListItemText primary={`FITUR`} />
                      </ListItem>
                  </List>
              </div>
              <Divider />
              <List >

                  <FormControl fullWidth>
                      <FormGroup>

                          <ListItem onClick={handleFitur('tokenize')} className={classes.disabledPadding} button>
                              <Checkbox checked={tokenize} value="tokenize" />

                              <ListItemText
                                  primary="Tokenize"
                              />
                          </ListItem>
                          <ListItem onClick={handleFitur('stopword')} className={classes.disabledPadding} button>
                              <Checkbox checked={stopword} value="stopword" />
                              <ListItemText
                                  primary=" Stopword Removal"
                              />
                          </ListItem>
                          <ListItem onClick={handleFitur('stemming')} className={classes.disabledPadding} button>
                              <Checkbox checked={stemming} value="stemming" />
                              <ListItemText
                                  primary="Stemming"
                              />
                          </ListItem>
                          <ListItem onClick={handleFitur('ner')} className={classes.disabledPadding} button>
                              <Checkbox checked={ner} value="ner" />
                              <ListItemText
                                  primary="Named Entity Recognition"
                              />
                          </ListItem>
                          <ListItem onClick={handleFitur('neural')} className={classes.disabledPadding} button>

                              <Checkbox checked={neural} value="neural" />
                              <ListItemText
                                  primary="Intent classification"
                              />
                          </ListItem>
                          <ListItem onClick={handleFiturAll('semua')} className={classes.disabledPadding} button>
                              <Checkbox checked={semua} value="semua" />
                              <ListItemText
                                  primary="Semua"
                              />
                          </ListItem>




                      </FormGroup>
                  </FormControl>

              </List>
              <Divider />
              <List >

                  <FormControl fullWidth>
                      <FormGroup>

                          <ListItem onClick={handleFiturExtra('search')} className={classes.disabledPadding} button>
                              <Checkbox checked={search} value="search" />

                              <ListItemText
                                  primary="Search"
                              />
                          </ListItem>
                       



                      </FormGroup>
                  </FormControl>

              </List>
          </Drawer>
    </div>
  )
}

DrawerWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DrawerWrapper);