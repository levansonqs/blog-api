import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Editor from "./Editor";

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
        marginBottom: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        display: 'flex',
        margin: 'auto'
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class AddPostForm extends Component {
    constructor(props) {
        super(props)
    }

    handleChangeEditor = (value) => {
        this.setState({content: value})

    }

    handleChange = (e) => {
        this.props.handleChangeState(e.target.name, e.target.value)
    }

    render() {
        const {classes, title, handleChangeState, content, error} = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth error={error.title}
                                     aria-describedby="name-error-text">
                            <InputLabel htmlFor="title">Enter title here</InputLabel>
                            <Input
                                name="title"
                                autoComplete="off"
                                value={title}
                                onChange={this.handleChange}
                                autoFocus
                            />
                            <FormHelperText id="name-error-text">{error.title}</FormHelperText>
                        </FormControl>
                        <Typography gutterBottom variant="headline" component="h5">
                            Content
                        </Typography>
                        <FormControl margin="normal" required fullWidth error={error.content}
                                     aria-describedby="name-error-text">
                            <FormHelperText id="name-error-text">{error.content}</FormHelperText>
                            <Editor
                                content={content}
                                handleChangeState={handleChangeState}
                                placeholder={'Write something...'}
                            />
                        </FormControl>
                    </form>
                </main>

            </React.Fragment>
        );
    }
}

AddPostForm.propTypes = {
    classes: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
}

export default withStyles(styles)(AddPostForm);