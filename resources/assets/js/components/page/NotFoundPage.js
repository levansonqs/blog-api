import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import {Link} from 'react-router-dom'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
});

function PaperSheet(props) {
    const {classes} = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="headline" component="h1">
                    Page Not found
                </Typography>
                <Typography component="p">
                    Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
                </Typography>
                <Link to='/'>
                    <Button  variant="contained" color="primary" aria-label="Back" className={classes.button}>
                        <ArrowLeft className={classes.leftIcon}/>
                        Back
                    </Button>
                </Link>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);