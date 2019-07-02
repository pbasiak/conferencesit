import React, { Component } from 'react';
import {conferencesList} from '../../conferences';
import ConferencesItem from '../Conferences/ConferencesItem';
import { SContent } from './styled/SContent';
import ConferencesSearch from '../Conferences/ConferencesSearch';
import { SConferencesMap } from '../Conferences/styled/SConferencesMap';
import { Marker, Popup } from '../../../node_modules/react-leaflet';

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
                return (<ConferencesItem key={item.name} name={item.name} startDate={item.start_date}  />);
            }

            return null;
        });

        const markers = conferencesList.map((item) => {
            const position = [item.lat, item.lng];
            if (item.name.toLowerCase().includes(filterValue.toLowerCase()) || filterValue === '') {
                return (
                    <Marker position={position}>
                        <Popup>
                            {item.name}
                        </Popup>
                    </Marker>
                );
            }

            return null;
        }); 

        return (
            <SContent>
                <ConferencesSearch onChange={this.filterConferences}/>
                {conferences}

                <SConferencesMap markers={markers}/>
            </SContent>
        );
    }
}
 
export default Content;