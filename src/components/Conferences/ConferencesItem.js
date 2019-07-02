import React, { Component } from 'react';
import { SConferencesItem } from './styled/SConferencesItem';
import { SConferencesName } from './styled/SConferencesName';

class ConferencesItem extends Component {
    render() { 
        return (
            <SConferencesItem>
                <SConferencesName>{this.props.name}</SConferencesName>
                {this.props.startDate}
            </SConferencesItem>
        );
    }
}
 
export default ConferencesItem;