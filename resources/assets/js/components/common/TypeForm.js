import React from 'react';
import Select, {components} from 'react-select';

const controlStyles = {
    borderRadius: '1px solid black',
    padding: '5px',
    color: '#000'
};

const ControlComponent = (props) => (
    <div style={controlStyles}>
        {<p>Post Type</p>}
        <components.Control {...props} />
    </div>
);

export default class CustomControl extends React.Component {
    state = {
        options:[
            {
                label:"Post",
                value:'post',
                id:1
            },
            {
                label:"Series",
                value:'series',
                id:2
            }
        ]
    };
    render() {
        const {type,handleChangeUtilsType}=this.props
        const {options}=this.state
        return (
            <Select
                defaultValue={options[0]}
                components={{ Control: ControlComponent }}
                placeholder="Type"
                isClearable
                isSearchable
                name="color"
                options={options}
                value={type}
                onChange={handleChangeUtilsType}
            />
        );
    }
}