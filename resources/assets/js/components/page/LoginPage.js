import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LoginForm from "../common/LoginForm";
import RegisterForm from "../common/RegisterForm";
// import SocialForm from "../components/SocialForm";

function TabContainer({children, dir}) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    btnTab: {
        maxWidth: '50%'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    tab: {
        boxShadow: 'none',
        backgroundColor: '#fff',
    },
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    render() {
        const {classes, theme, history} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <AppBar position="static" color="default" className={classes.tab}>
                                <Tabs
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    fullWidth
                                >
                                    <Tab label="Login" className={classes.btnTab}/>
                                    <Tab label="Register" className={classes.btnTab}/>
                                </Tabs>
                            </AppBar>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={this.state.value}
                                onChangeIndex={this.handleChangeIndex}
                            >
                                <TabContainer dir={theme.direction}>
                                    <LoginForm
                                        history={history}
                                    />
                                </TabContainer>
                                <TabContainer dir={theme.direction}>
                                    <RegisterForm
                                        history={history}
                                    />
                                </TabContainer>
                            </SwipeableViews>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FullWidthTabs);