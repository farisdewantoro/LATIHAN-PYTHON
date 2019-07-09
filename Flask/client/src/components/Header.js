import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './styles';
import {
    Button,
    Typography,
    Toolbar,
    AppBar,
    IconButton
} from '@material-ui/core';
function Header(props) {
    const { classes, className, handleDrawer } = props;
    return (
        <div className={classes.root}>
            <AppBar className={className} position="fixed" color="default" elevation={1}>
                <Toolbar>
                    <div className={classes.rootLogo}>
                        <div className={classes.imageBot} style={{ backgroundImage: `url(/static/image/bot.png)` }} />
                        <Typography className={classes.textName}>
                            Virtual Assitant
                        </Typography>
                    </div>
                    <div>
                        <Typography className={classes.textName}>
                            FARIS DEWANTORO - 15-2015-042
                        </Typography>
                    </div>
                    <IconButton onClick={handleDrawer}>
                        <MoreVertIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);