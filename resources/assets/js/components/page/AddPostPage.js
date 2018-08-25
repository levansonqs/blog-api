import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddPostForm from "../common/AddPostForm";
import CommonPostForm from "../common/CommonPostForm";
import CategoryForm from "../common/CategoryForm";
import StatusForm from "../common/StatusForm";
import TypeForm from "../common/TypeForm";
import TagForm from "../common/TagForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CustomizedSnackbars from "../common/CustomizedSnackbars";
import axios from "axios";
import {api_url} from "../../constants/config";
import Validator from "validator";

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
        color: theme.palette.text.secondary,
    },
    paperBottom: {
        padding: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
    tab: {
        boxShadow: 'none',
        backgroundColor: '#fff',
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    }
});

class FullWidthTabs extends React.Component {
    state = {
        title: '',
        content: '',
        image: '',
        cat_id: '',
        tag_id: '',
        status: {
            label: "Publish",
            value: 'publish',
            id: 1
        },
        value: 0,
        type: {
            label: "Post",
            value: 'post',
            id: 1
        },
        loading: false,
        openNoti: false,
        typeNoti: 'success',
        messageNoti: 'Good Job!',
        error: {}
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    handleChangeState = (name, value) => {
        this.setState({[name]: value});
    };

    handleValueImage = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                image: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    handleChangeUtilsTag = (newValue, actionMeta) => {
        this.setState({'tag_id': newValue});
    };

    handleChangeUtilsCate = (newValue, actionMeta) => {
        this.setState({'cat_id': newValue});
    };

    handleChangeUtilsStatus = (newValue, actionMeta) => {
        this.setState({'status': newValue});
    };

    handleChangeUtilsType = (newValue, actionMeta) => {
        this.setState({'type': newValue});
    };

    validate = (data) => {
        const error = {}
        if (!data.title) error.title = "Can't be blank";
        if (!data.content) error.content = "Can't be blank";
        if (!data.image) error.image = "Can't be blank";
        if (!data.cat_id) error.cat_id = "Can't be blank";
        if (!data.tag_id) error.tag_id = "Can't be blank";
        return error
    }

    getBack = () =>
        this.setState({openNoti: false})

    onSubmit = (e) => {
        e.preventDefault()
        const error = {}
        if (Object.keys(error).length === 0) {
            this.setState({loading: true});
            axios.post(`${api_url}post`, this.state, {headers: {'Authorization': "Bearer " + localStorage.token}}).then((response) => {
                this.props.history.push('/posts')
            }).catch((error) => {
                    this.setState({
                        loading: false,
                        openNoti: true,
                        typeNoti: 'error',
                        messageNoti: error.response.data.error
                    })
                }
            )
        } else {
            this.setState({error})
        }
    }

    render() {
        const {classes} = this.props;
        const {title, type, error, content, image, status, cat_id, tag_id, loading, openNoti, typeNoti, messageNoti} = this.state
        return (
            <div className={classes.root}>
                <Typography gutterBottom variant="headline" component="h2">
                    Add New Post
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={8}>
                        <Paper className={classes.paper}>
                            <AddPostForm
                                title={title}
                                error={error}
                                content={content}
                                handleChangeState={this.handleChangeState}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paperBottom}>
                            <CommonPostForm
                                error={error}
                                image={image}
                                handleValueImage={this.handleValueImage}
                            />
                        </Paper>
                        <Paper className={classes.paper}>
                            <Typography gutterBottom variant="headline" component="p">
                                Post Utils
                            </Typography>
                            <TagForm
                                error={error}
                                tag_id={tag_id}
                                handleChangeUtilsTag={this.handleChangeUtilsTag}
                            />
                            <CategoryForm
                                error={error}
                                cat_id={cat_id}
                                handleChangeUtilsCate={this.handleChangeUtilsCate}
                            />
                            <StatusForm
                                status={status}
                                handleChangeUtilsStatus={this.handleChangeUtilsStatus}
                            />
                            <TypeForm
                                type={type}
                                handleChangeUtilsType={this.handleChangeUtilsType}
                            />
                        </Paper>
                    </Grid>
                </Grid>
                {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
                <Button
                    type="submit"

                    variant="raised"
                    color="primary"
                    className={classes.submit}
                    onClick={this.onSubmit}
                >
                    Save Post
                    <CloudUploadIcon className={classes.rightIcon}/>
                </Button>
                <CustomizedSnackbars
                    openNoti={openNoti}
                    getBack={this.getBack}
                    type={typeNoti}
                    message={messageNoti}
                />
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FullWidthTabs);