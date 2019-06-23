import React, { Component } from 'react';
import { SConferencesSearchInput } from './styled/SConferencesSearchInput';
import { SConferencesSearchTitle } from './styled/SConferencesSearchTitle';

class ConferencesSearch extends Component {
    render() { 
        return (
            <div>
                <SConferencesSearchTitle>Find Your conference</SConferencesSearchTitle>
                <SConferencesSearchInput type="text" onChange={this.props.onChange} placeholder="TYPE NAME..."/>
            </div>
        );
    }
}
 
export default ConferencesSearch;
