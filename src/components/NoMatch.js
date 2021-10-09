import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';

const NoMatchSection = styled.section`
    width: 100%;
    height: 75vh;
    padding: 4rem 0rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const NoMatch = () => {
    return (
        <NoMatchSection>
            <h1>Page not found </h1>
            <Button style={{marginTop: '20px'}} to="/" primary="true">
                Return Home
            </Button>
        </NoMatchSection>
    )
}

export default NoMatch
