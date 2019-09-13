import React, { Component } from 'react';
import {conferencesList} from '../../conferences';
import ConferencesItem from '../Conferences/ConferencesItem';
import { SContent } from './styled/SContent';
import ConferencesSearch from '../Conferences/ConferencesSearch';
import { SConferencesMap } from '../Conferences/styled/SConferencesMap';
import { Marker, Popup } from '../../../node_modules/react-leaflet';
import { Text } from '../Text';
import Select from '../Select';
import _ from 'lodash';
import { Box, Divider } from '@material-ui/core';

class Content extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filterValue: null,
            countryFilterValue: null,
            cityFilterValue: null,
        }

        this.filterConferences = this.filterConferences.bind(this);
        this.filterConferencesByCountry = this.filterConferencesByCountry.bind(this);
        this.filterConferencesByCity = this.filterConferencesByCity.bind(this);
    }

    filterConferences(e) {
        this.setState({
            filterValue: e.target.value === null || '' ? null : e.target.value,
        });
    }

    filterConferencesByCountry(e) {
        this.setState({
            countryFilterValue: e === null || ''  ? null : e.value,
        })
    }

    filterConferencesByCity(e) {
        this.setState({
            cityFilterValue: e === null || '' ? null : e.value,
        })
    }

    render() {
        const {filterValue, countryFilterValue, cityFilterValue} = this.state;

        const filterQuery = {name: filterValue, country: countryFilterValue, city: cityFilterValue};

        const conferences = conferencesList.map((item) => {
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
        }).filter(item =>
            Object.keys(filterQuery).every(key => {
                return String(item.props[key].toLowerCase()).includes(String(filterQuery[key]).toLowerCase()) || filterQuery[key] === null
            }
            )
        );

        const markers = conferencesList.map((item, key) => {
            const position = [item.lat, item.long];

            if (item.lat === '' || item.long === '') {
                return false;
            }

            return (
                <Marker
                    key={key}
                    position={position}
                    name={item.name}
                    city={item.city}
                    country={item.country}
                    category={item.category}
                    startDate={item.start_date}
                >
                    <Popup>
                        <Box>{item.name}</Box>
                        <Box>{item.start_date}</Box>
                    </Popup>
                </Marker>
            );
        }).filter(item =>
            Object.keys(filterQuery).every(key => {
                return String(item.props[key].toLowerCase()).includes(String(filterQuery[key]).toLowerCase()) || filterQuery[key] === null
            }
            )
        );

        let conferencesCountries = conferencesList.map((item) => {
            return {
                value: item.country,
                label: item.country,
            };
        });

        conferencesCountries = _.uniqBy(conferencesCountries, 'value');

        let conferencesCities = conferencesList.map((item) => {

            if (countryFilterValue === item.country) {
                return {
                    value: item.city,
                    label: item.city,
                }
            }

            if (countryFilterValue === '') {
                return {
                    value: item.city,
                    label: item.city,
                };
            }

            return false;
        }).filter(item => item !== false);

        conferencesCities = _.uniqBy(conferencesCities, 'value');

        return (
            <SContent>
                <ConferencesSearch onChange={this.filterConferences}/>

                <Box display="flex" mr="20px" mb="20px" justifyContent="flex-start" position="relative" zIndex="100">
                    <Box mr="20px">
                        <Select
                            isClearable={true}
                            options={conferencesCountries}
                            onChange={this.filterConferencesByCountry}
                            placeholder="Choose country / region"
                        />
                    </Box>
                    <Box>
                        <Select
                            isClearable={true}
                            options={conferencesCities}
                            onChange={this.filterConferencesByCity}
                            placeholder="Choose city"
                        />
                    </Box>
                </Box>
                <Box display="flex" mb="20px">
                    <Text fontSize="22px">Results count: <strong>{conferences.length}</strong></Text>
                </Box>
                <Divider/>
                <Box display="flex" flexDirection="column" mt="20px" position="relative" zIndex="1">
                    {<SConferencesMap markers={markers} />}

                    <Box>
                        {conferences}
                    </Box>
                </Box>
            </SContent>
        );
    }
}

export default Content;
