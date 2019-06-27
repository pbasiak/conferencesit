import React, { Component } from 'react';
import {conferencesList} from '../../conferences';
import ConferencesItem from '../Conferences/ConferencesItem';
import { SContent } from './styled/SContent';
import ConferencesSearch from '../Conferences/ConferencesSearch';
import { SConferencesMap } from '../Conferences/styled/SConferencesMap';

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterValue: '',
        }

        this.filterConferences = this.filterConferences.bind(this);
    }

    filterConferences(e) {
        this.setState({
            filterValue: e.target.value,
        });
    }

    render() {
        const {filterValue} = this.state;

        const conferences = conferencesList.map((item) => {
            if (item.name.toLowerCase().includes(filterValue.toLowerCase()) || filterValue === '') {
                console.log('here');
                return (<ConferencesItem key={item.name} name={item.name} date={item.date} />);
            }

            return null;
        });

        return (
            <SContent>
                <ConferencesSearch onChange={this.filterConferences}/>
                {conferences}

                <SConferencesMap/>
            </SContent>
        );
    }
}
 
export default Content;