import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import { InfoDataThree, InfoDataTwo } from '../data/InfoData';
import InfoSection from './InfoSection';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const About = ({ slides }) => {
    return (
        <>
            <Hero slides={slides} buttonDisplay={false} centerText="true"/>
            <MainContainer>
                <InfoSection {...InfoDataTwo} />
                <InfoSection {...InfoDataThree}/>
            </MainContainer>
            
        </>
    )
}

export default About
