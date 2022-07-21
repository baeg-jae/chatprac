import styled from '@emotion/styled';
import React from 'react';
import { fadeAnimation } from './CssComponent';
import flex from './flex';

const Splash = () => {
    return <StStart>환영합니다</StStart>;
};

export default Splash;

const StStart = styled.div`
    ${flex()}
    animation: ${fadeAnimation} 3s ease;
    color: var(--brown);
    font-size: 100px;
`;
