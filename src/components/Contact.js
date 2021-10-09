import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, RealButton } from './Button';

const ContactSection = styled.section`
  height: 100vh;
  width: 100vw;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  top: 100px;
  text-align: center;
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem calc((100vw - 600px) / 2);

    @media screen and (max-width: 768px) {
        padding: 3rem calc((100vw - 200px) / 2);
    }
`;

const FormSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const FormInput = styled.input`
    margin-bottom: 20px;
`;

const FormLabel = styled.label`
    margin-bottom: 5px;
`;

const Contact = () => {
    const history = useHistory();
    const submitHandler = (event) => {
        event.preventDefault();
        window.alert("Thank you for contacting us! We will get back to you soon.");
        history.go(0);
    }

    return (
        <ContactSection>
            <h1>Contact Us</h1>
            <ContactForm onSubmit={submitHandler}>
                <FormSection>
                    <FormLabel htmlFor="name"/>
                        Name:
                        <FormInput 
                            name="name"
                            id="name"
                            placeholder="Name"
                            required
                        />
                </FormSection>
                <FormSection>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                        <FormInput 
                            name="name"
                            id="name"
                            placeholder="Name"
                            required
                        />
                </FormSection>
                <FormSection>
                <FormLabel htmlFor="subject">Subject:</FormLabel>
                        <FormInput 
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                        />
                </FormSection>
                <FormSection>
                    <FormLabel htmlFor="body">Body:</FormLabel>
                        <textarea 
                            name="body"
                            id="body"
                            placeholder="Body"
                            rows= "8"
                            required
                        />
                </FormSection>
                <RealButton type="submit" style={{marginTop: "20px"}} primary="true">Submit</RealButton>
            </ContactForm>
        </ContactSection>
    )
}

export default Contact
