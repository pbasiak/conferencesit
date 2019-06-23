import React, { Component } from 'react';
import {conferencesList} from '../../conferences';
import ConferencesItem from '../Conferences/ConferencesItem';
import { SContent } from './styled/SContent';

class Content extends Component {
    render() {
        const conferences = conferencesList.map((item) => {
            return (<ConferencesItem key={item.name} name={item.name} date={item.date}/>);
        });

        return (
            <SContent>
                {conferences}
            </SContent>
        );
    }
}
 
export default Content;