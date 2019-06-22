import React, { Component } from 'react';

class ConferencesItem extends Component {
    render() { 
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}
 
export default ConferencesItem;