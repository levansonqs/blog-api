import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    layout: {
        width: 'auto',
    },

    avatar: {
        margin: 'auto',
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

function LoginForm(props) {
    const {classes} = props;

    return (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.layout}>
                <Avatar className={classes.avatar}>
                    <AddCircleOutline/>
                </Avatar>
                <Typography variant="headline">Sign up</Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="name">Full Name</InputLabel>
                        <Input id="name" name="name" autoComplete="name"/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input  name="email" autoComplete="email"/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="cPassword">Confirm Password</InputLabel>
                        <Input
                            name="cPassword"
                            type="cPassword"
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="raised"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                        <CloudUploadIcon className={classes.rightIcon} />
                    </Button>
                </form>
            </main>
        </React.Fragment>
    );
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);