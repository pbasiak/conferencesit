import styled from 'styled-components';

export const Hr = styled.hr`
    border-color: ${props => props.color ? props.color : '#DDD'};
    ${props => props.maxWidth && `max-width: ${props.maxWidth};`}
    ${props => props.margin && `margin: ${props.margin};`}
`;
