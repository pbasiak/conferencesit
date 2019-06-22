import React, { Component } from 'react';
import {SHeader} from './styled/SHeader';
import Logo from '../../assets/logo.svg';
import { SLogo } from './styled/SLogo';

class Header extends Component {
    render() { 
        return (
            <SHeader>
                <SLogo src={Logo} alt=""/>
            </SHeader>
        );
    }
}
 
export default Header;