import React, { Component } from 'react';
import { SConferencesItem } from './styled/SConferencesItem';
import { SConferencesName } from './styled/SConferencesName';
import { Flex } from '../Flex';
import { Hr } from '../Hr';
import { SConferencesLabel } from './styled/SConferencesLabel';
import { SConferencesSingleData } from './styled/SConferencesSingleData';
import { Button } from '../Button';

class ConferencesItem extends Component {
    render() { 
        return (
            <SConferencesItem>
                <Flex justifyContent="flex-start" alignItems="center">
                    <SConferencesName>{this.props.name}</SConferencesName>
                    <small>{this.props.startDate}</small>
                </Flex>
                <Hr color="#EAEAEA" size="1"/>
                <Flex justifyContent="flex-start">
                    <SConferencesSingleData>
                        <SConferencesLabel>Country:</SConferencesLabel>
                        {this.props.country}
                    </SConferencesSingleData>
                    <SConferencesSingleData>
                        <SConferencesLabel>City:</SConferencesLabel>
                        {this.props.city}
                    </SConferencesSingleData>
                    <SConferencesSingleData>
                        <SConferencesLabel>Category:</SConferencesLabel>
                        {this.props.category}
                    </SConferencesSingleData>
                </Flex>
                <Flex justifyContent="flex-end">
                    <Button href={this.props.url} target="_blank">Official site</Button>
                </Flex>
            </SConferencesItem>
        );
    }
}
 
export default ConferencesItem;