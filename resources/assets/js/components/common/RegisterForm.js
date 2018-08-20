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
import axios from "axios";
import {api_url} from "../../constants/config";
import Validator from "validator";
import FormHelperText from "@material-ui/core/FormHelperText";
import CustomizedSnackbars from "./CustomizedSnackbars";

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

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            cPassword: '',
            loading: false,
            error: {},
            openNoti: true,
            typeNoti: 'success',
            messageNoti: 'Good Job!'
        }
    }

    handleChange = (e) =>
        this.setState({[e.target.name]: e.target.value})

    validate = (data) => {
        const error = {}
        if (!Validator.isEmail(data.email)) error.email = "Invalid email";
        // if (!data.name) error.name = "Can't be blank";
        if (!(data.cPassword === data.password)) error.password = "Not Match!";
        if (!data.password) error.password = "Can't be blank";
        if (!data.cPassword) error.cPassword = "Can't be blank";
        return error
    }

    getBack = () =>
        this.setState({openNoti:false})

    submit = (e) => {
        e.preventDefault()
        const error = this.validate(this.state)
        if (Object.keys(error).length === 0) {
            this.setState({loading: true});
            axios.post(`${api_url}auth/register`, this.state).then((respon) => {
                localStorage.token = respon.data.token
                this.props.history.push('/')
            }).catch((error) => {
                const data=error.response.data.errors
                let message = '';
                for (var key in data) {
                    message = data[key][0]
                }
                    this.setState({
                        loading: false,
                        openNoti: true,
                        typeNoti: 'error',
                        messageNoti: message
                    })
                })
        } else {
            this.setState({error})
        }
    }

    render() {
        const {classes} = this.props;
        const {name, email, password, cPassword, loading, error, openNoti, typeNoti, messageNoti} = this.state
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Avatar className={classes.avatar}>
                        <AddCircleOutline/>
                    </Avatar>
                    <Typography variant="headline">Sign up</Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth error={error.name}
                                     aria-describedby="name-error-text">
                            <InputLabel htmlFor="name">Full Name</InputLabel>
                            <Input
                                id="name"
                                name="name"
                                autoComplete='off'
                                value={name}
                                onChange={this.handleChange}
                            />
                            <FormHelperText id="name-error-text">{error.name}</FormHelperText>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth error={error.email}
                                     aria-describedby="name-error-text">
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input
                                name="email"
                                autoComplete="off"
                                value={email}
                                onChange={this.handleChange}
                            />
                            <FormHelperText id="name-error-text">{error.email}</FormHelperText>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth error={error.password}
                                     aria-describedby="name-error-text">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                autoComplete="off"
                                value={password}
                                onChange={this.handleChange}
                            />
                            <FormHelperText id="name-error-text">{error.password}</FormHelperText>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth error={error.cPassword}
                                     aria-describedby="name-error-text">
                            <InputLabel htmlFor="cPassword">Confirm Password</InputLabel>
                            <Input
                                name="cPassword"
                                type="password"
                                autoComplete="off"
                                value={cPassword}
                                onChange={this.handleChange}
                            />
                            <FormHelperText id="name-error-text">{error.cPassword}</FormHelperText>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="raised"
                            color="primary"
                            className={classes.submit}
                            onClick={this.submit}
                        >
                            Sign Up
                            <CloudUploadIcon className={classes.rightIcon}/>
                        </Button>
                    </form>
                    <CustomizedSnackbars
                        openNoti={openNoti}
                        getBack={this.getBack}
                        type={typeNoti}
                        message={messageNoti}
                    />
                </main>
            </React.Fragment>
        );
    }
}

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);