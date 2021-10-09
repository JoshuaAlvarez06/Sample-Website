import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterSection = styled.section`
  width: 100%;
  padding: 4rem 5rem;
  background: #000;
  position: relative;
  top: 30vh;

  @media screen and (max-width: 768px) {
    top: 120vh;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterInfoSection = styled.div`
  display: flex;
`;

const LeftRightSections = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1.2rem;

  @media screen and (max-width: 768px) {
    margin-top: 1.2rem;
  }
`;

const SectionLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 0.5rem 0;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <h1 style={{ fontSize: "2.5rem" }}>Let's find your dream home.</h1>
        <FooterInfoSection>
          <LeftRightSections>
            <h4>Contact Us</h4>
            <SectionLinks to="/faq">FAQ</SectionLinks>
            <SectionLinks to="/support">Support</SectionLinks>
            <SectionLinks to="/Questions">Question</SectionLinks>
          </LeftRightSections>
          <LeftRightSections>
            <h4>Offices</h4>
            <SectionLinks to="/us-offices">United States</SectionLinks>
            <SectionLinks to="/eu-offices">Europe</SectionLinks>
            <SectionLinks to="/ca-offices">Canada</SectionLinks>
          </LeftRightSections>
        </FooterInfoSection>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
