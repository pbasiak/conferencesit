import React, { Component } from 'react';
import { SSelect } from './styled/SSelect';

class Select extends Component {
    render() {
        const {
            options,
            onChange,
            isClearable,
            placeholder,
        } = this.props;

        return (
            <SSelect
                options={options}
                onChange={onChange}
                isClearable={isClearable}
                placeholder={placeholder}
            />
        );
    }
}

export default Select;
