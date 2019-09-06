import React, { Component } from 'react';
import {conferencesList} from '../../conferences';
import ConferencesItem from '../Conferences/ConferencesItem';
import { SContent } from './styled/SContent';
import ConferencesSearch from '../Conferences/ConferencesSearch';
import { SConferencesMap } from '../Conferences/styled/SConferencesMap';
import { Marker, Popup } from '../../../node_modules/react-leaflet';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { Hr } from '../Hr';

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
                return (
                    <ConferencesItem
                        key={`${item.name}_${item.start_date}`}
                        url={item.url}
                        name={item.name}
                        city={item.city}
                        country={item.country}
                        category={item.category}
                        startDate={item.start_date}
                    />
                );
            }

            return false;
        }).filter(item => item !== false);

        const markers = conferencesList.map((item) => {
            const position = [item.lat, item.long];

            if (item.lat || item.long === '') {
                return false;
            }

            if (item.name.toLowerCase().includes(filterValue.toLowerCase()) || filterValue === '') {
                return (
                    <Marker position={position}>
                        <Popup>
                            {item.name}
                        </Popup>
                    </Marker>
                );
            }
            return false;
        }).filter(item => item !== false);

        console.log(conferences);

        return (
            <SContent>
                <ConferencesSearch onChange={this.filterConferences}/>

                <Flex>
                    <Text fontSize="22px">Results count: <strong>{conferences.length}</strong></Text>
                </Flex>
                <Hr maxWidth="600px" margin="10px 10px 20px 0" color="#DDD" size="1"/>
                <Flex direction="column">
                    {markers.length > 0 && <SConferencesMap markers={markers} />}

                    <div>
                        {conferences}
                    </div>
                </Flex>
            </SContent>
        );
    }
}
 
export default Content;