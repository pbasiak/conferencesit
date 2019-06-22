import React, { Component } from 'react';
import {conferencesList} from '../../conferences';
import ConferencesItem from '../Conferences/ConferencesItem';
import { SContent } from './styled/SContent';

class Content extends Component {
    render() {
        console.log(conferencesList);

        const conferences = conferencesList.map((item) => {
            console.log(item.name);
            return (<ConferencesItem key={item.name} name={item.name}/>);
        });

        return (
            <SContent>
                {conferences}
            </SContent>
        );
    }
}
 
export default Content;