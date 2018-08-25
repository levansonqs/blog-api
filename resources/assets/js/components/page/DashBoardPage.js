import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TotalChart from '../chart/TotalChart'
import PostChart from '../chart/PostChart'
import StatusChart from '../chart/StatusChart'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
});

function CenteredGrid(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="headline" component="h2">
                            Total
                        </Typography>
                        <TotalChart/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="headline" component="h2">
                            Post
                        </Typography>
                        <PostChart/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="headline" component="h2">
                            Status
                        </Typography>
                        <StatusChart/>
                    </Paper>
                </Grid>
                {/*<Grid item xs={3}>*/}
                    {/*<Paper className={classes.paper}>xs=3</Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                    {/*<Paper className={classes.paper}>xs=3</Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                    {/*<Paper className={classes.paper}>xs=3</Paper>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                    {/*<Paper className={classes.paper}>xs=3</Paper>*/}
                {/*</Grid>*/}
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);