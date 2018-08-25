import React from 'react';
import Select, {components} from 'react-select';

const controlStyles = {
    borderRadius: '1px solid black',
    padding: '5px',
    color: '#000'
};

const ControlComponent = (props) => (
    <div style={controlStyles}>
        {<p>Post Status</p>}
        <components.Control {...props} />
    </div>
);
export default class CustomControl extends React.Component {
    state = {
        options:[
            {
                label:"Publish",
                value:'publish',
                id:1
            },
            {
                label:"Draft",
                value:'draft',
                id:2
            }
        ]
    };
    render() {
        const {status,handleChangeUtilsStatus}=this.props
        const {options}=this.state
        return (
            <Select
                placeholder="Status"
                components={{ Control: ControlComponent }}
                isClearable
                isSearchable
                name="color"
                options={options}
                value={status}
                onChange={handleChangeUtilsStatus}
            />
        );
    }
}