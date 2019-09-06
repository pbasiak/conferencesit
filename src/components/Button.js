import styled from 'styled-components';

export const Button = styled.a`
    background: #6D65FD;
    border-top: 1px solid #554ED5;
    padding: 7px 13px;
    border-radius: 8px;
    text-decoration: none;
    color: #FFF;
    font-size: 13px;
    transition: all 0.5s ease;

    &:hover,
    &:focus {
        opacity: 0.8;
    }
`;
