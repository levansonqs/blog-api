import React, {Component} from 'react';
import axios from 'axios'
import CreatableSelect from 'react-select/lib/Creatable';
import {components} from 'react-select';
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const controlStyles = {
    borderRadius: '1px solid black',
    padding: '5px',
    color: '#000'
};

const ControlComponent = (props) => (
    <div style={controlStyles}>
        {<p>Post Category</p>}
        <components.Control {...props} />
    </div>
);

export default class CreatableAdvanced extends React.Component {
    state = {
        isLoading: true,
        options: [],
    };

    handleCreate = (inputValue) => {
        this.setState({isLoading: true});
        axios.post('/api/cate', {title: inputValue}).then((response) => {
            const {options} = this.state;
            const newOption = {
                label: response.data.title,
                value: response.data.alias,
                id: response.data.id,
            }

            this.setState({
                isLoading: false,
                options: [...options, newOption],
            });
            this.props.handleChangeUtilsCate(newOption)
        })
    };

    componentDidMount() {
        axios.get('/api/cate').then((response) => {
            const opition = []
            const cate = response.data
            for (let i = 0; i < cate.length; i++) {
                opition.push({
                    label: cate[i].title,
                    value: cate[i].alias,
                    id: cate[i].id
                })
            }
            this.setState({
                isLoading: false,
                options: opition
            });
        })
    }

    render() {
        const {cat_id, handleChangeUtilsCate,error} = this.props
        const {isLoading, options} = this.state;
        return (
            <FormControl margin="normal" required fullWidth error={error.cat_id}
                         aria-describedby="name-error-text">
                <FormHelperText id="name-error-text">{error.cat_id}</FormHelperText>
                <CreatableSelect
                    components={{Control: ControlComponent}}
                    placeholder="Category"
                    isClearable
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    onChange={handleChangeUtilsCate}
                    onCreateOption={this.handleCreate}
                    options={options}
                    value={cat_id}
                />
            </FormControl>
        );
    }
}