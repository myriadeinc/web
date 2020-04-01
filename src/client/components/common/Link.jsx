import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BlackLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 300;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`;

export const WhiteLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 300;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: white;
    }
`;

export const BlueLink = styled(Link)`
    text-decoration: none;
    font-weight: 300;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const BoldBlackLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 600;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
        font-weight: 600;
    }
`;
