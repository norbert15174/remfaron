import React from "react";
import styled from 'styled-components';
import ContactList from './list/contactlist';


const ContactWrapper = styled.div`

    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #1F1F20;

`;

const ContactHeader = styled.h1`

    width: 100%;
    height: 20%;
    text-align: center;
    padding-top: 10%;
    background-color: #1F1F20;
    margin-top: 0;
    color: white;
`;

class Contact extends React.Component{

    render(){
        return(
            <ContactWrapper>

                <ContactHeader>Skontaktuj się z nami</ContactHeader>
                <ContactList></ContactList>

            </ContactWrapper>
        );
    };


};

export default Contact;