import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import CustomizedSnackbars from "./CustomizedSnackbars";
import CategoryForm from "./CategoryForm";
import TypeForm from "./TypeForm";
import StatusForm from "./StatusForm";
import TagForm from "./TagForm";
import Editor from "./Editor";
import Image from 'material-ui-image'


const styles = theme => ({
    layout: {
        width: 'auto',
        position: 'relative!important'
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
    imageButton: {
        position: 'absolute',
        top: '-12px!important',
        right:'0px'
    },
    featureImage: {
        marginBottom:'30px!important'
    },
    inputImage: {
        opacity:0
    },
});

class AddPostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '',
            file: '',
        }
    }

    handleImage = () =>
        this.nameInput.click();

    render() {
        const {classes,image,handleValueImage, error} = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <form className={classes.form}>
                        <Typography gutterBottom variant="headline" component="p">
                            Feature Image
                        </Typography>
                        <Button
                            variant="fab"
                            color="primary"
                            aria-label="Add"
                            className={classes.imageButton}
                            onClick={this.handleImage}
                        >
                            <AddIcon/>
                        </Button>
                        <FormControl margin="normal" required fullWidth error={error.image}
                                     aria-describedby="name-error-text">
                            <FormHelperText id="name-error-text">{error.image}</FormHelperText>
                        <input
                            type='file'
                            ref={(input) => { this.nameInput = input; }}
                            name='image'
                            className={classes.inputImage}
                            onChange={handleValueImage}
                            accept='image/*'
                        />
                        </FormControl>

                        {image&&<Image
                            src={image}
                            aspectRatio={(16/9)}
                        />}
                    </form>
                </main>
            </React.Fragment>
        );
    }
}

AddPostForm.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddPostForm);