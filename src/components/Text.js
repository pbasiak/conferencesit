import styled from 'styled-components';

export const Text = styled.div`
    ${props => props.fontSize && `font-size: ${props.fontSize};`}
    ${props => props.margin && `margin: ${props.margin};`}
`;
