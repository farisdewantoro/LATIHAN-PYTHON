import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SendIcon from '@material-ui/icons/Send';
import BuildIcon from '@material-ui/icons/Build';
import {
    Paper,
    AppBar,
    Toolbar,
    Typography,
    Button,
    InputBase,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    Checkbox,
    FormControlLabel,
    FormControl,
    FormLabel,
    FormGroup

} from '@material-ui/core';
import styles from './styles';

function Footer(props) {
    const { 
        classes, 
        ucapan, 
        handleOnChange, 
        handleSubmitChat,
        className
     } = props;
 
    return (
        <div className={classes.root}>
            <AppBar className={className} position="fixed" color="default" elevation={1} >
                <form onSubmit={handleSubmitChat} >
                <Toolbar>
              
                    <Paper className={classes.boxChat} elevation={0}>
                        <InputBase className={classes.inputBoxChat} value={ucapan} onChange={handleOnChange} placeholder="Masukan pesan disini" />
                    </Paper>
                    <IconButton className={classes.sendIcon} type="submit">
                        <SendIcon/>
                    </IconButton>
                
                </Toolbar>
                </form>
            </AppBar>
        
        </div>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);