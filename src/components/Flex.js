import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    ${props => props.direction ? `flex-direction: ${props.direction}` : ''};
    ${props => props.justifyContent ? `justify-content: ${props.justifyContent}` : ''};
    ${props => props.justifyContent ? `justify-content: ${props.justifyContent}` : ''};
    ${props => props.alignItems ? `align-items: ${props.alignItems}` : ''};
`;
