import React, { Component } from 'react';
import { SConferencesItem } from './styled/SConferencesItem';
import { SConferencesName } from './styled/SConferencesName';
import { SConferencesLabel } from './styled/SConferencesLabel';
import { SConferencesSingleData } from './styled/SConferencesSingleData';
import { Box, Button, Divider } from '@material-ui/core';

class ConferencesItem extends Component {
    render() { 
        return (
            <SConferencesItem>
                <Box display="flex" justifyContent="flex-start" alignItems="center" mb="15px">
                    <SConferencesName>{this.props.name}</SConferencesName>
                    <small>{this.props.startDate}</small>
                </Box>
                <Divider/>
                <Box display="flex" justifyContent="flex-start" mb="20px" mt="15px">
                    <SConferencesSingleData>
                        <SConferencesLabel>Country / Region:</SConferencesLabel>
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
                </Box>
                <Box display="flex" justifyContent="flex-end">
                    <Button color="primary" variant="contained" href={this.props.url} target="_blank">Official site</Button>
                </Box>
            </SConferencesItem>
        );
    }
}
 
export default ConferencesItem;