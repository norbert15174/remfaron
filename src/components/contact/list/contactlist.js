import React from "react";
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';


const ContactListHeader = styled.div`

    display: grid;
    margin-top: 10%;
    width: 90vw;
    grid-template-columns: 30vw 30vw 30vw;
    height: 30vh;
    margin-left:auto;
    margin-right: auto;
    text-align: center;
    position: relative;
    left: 5vw;
`;

const IconContainer = styled.div`



`;

const ContactList = () =>(
    <ContactListHeader>
    <EmailIcon style={{fontSize: 100}}></EmailIcon>
    <FacebookIcon style={{fontSize: 100}}></FacebookIcon>
    <PhoneIcon style={{fontSize: 100}}></PhoneIcon>
    </ContactListHeader>
);

export default ContactList;