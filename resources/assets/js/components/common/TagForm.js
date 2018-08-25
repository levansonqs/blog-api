import React from 'react';
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
        {<p>Post Tag</p>}
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
        axios.post('/api/tag', {title: inputValue}).then((response) => {
            const {options} = this.state;
            const {tag_id} = this.props;
            const newOption = {
                label: response.data.title,
                value: response.data.alias,
                id: response.data.id,
            }
            this.setState({
                isLoading: false,
                options: [...options, newOption],
            });
            this.props.handleChangeUtilsTag([...tag_id, newOption]);
        })
    };

    componentDidMount() {
        axios.get('/api/tag').then((response) => {
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
        const {isLoading, options} = this.state;
        const {tag_id, handleChangeUtilsTag,error} = this.props
        return (
            <FormControl margin="normal" required fullWidth error={error.tag_id}
                         aria-describedby="name-error-text">
                <FormHelperText id="name-error-text">{error.tag_id}</FormHelperText>
                <CreatableSelect
                    isMulti
                    components={{Control: ControlComponent}}
                    placeholder="Tag"
                    isClearable
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    onChange={handleChangeUtilsTag}
                    onCreateOption={this.handleCreate}
                    options={options}
                    value={tag_id}
                />
            </FormControl>
        );
    }
}