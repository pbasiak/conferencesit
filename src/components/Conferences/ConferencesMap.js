import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from '../../../node_modules/react-leaflet';
import {conferencesList} from '../../conferences';

class ConferencesMap extends Component {
    render() {
        const defaultPosition = {
            lat: 51.50853,
            lng: -0.12574,
            zoom: 3,
        }
        const defaultCenter = [defaultPosition.lat, defaultPosition.lng];
        

        return (
            <Map center={defaultCenter} zoom={defaultPosition.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.props.markers}
            </Map>
        );
    }
}

export default ConferencesMap;
