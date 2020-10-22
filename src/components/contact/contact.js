import React from "react";
import styled from "styled-components";
import ContactList from "./list/contactlist";
import Email from "./email/email";

const ContactWrapper = styled.div`
  width: 100vw;
  height: 140vh;
  position: relative;
  background-color: #070707;

  @media only screen and (max-width: 920px) {
    height: 280vh;
    min-height: 1800px;
  }
`;

const ContactHeader = styled.h1`
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 10vh;
  padding-top: 10vh;
  padding-bottom: 5vh;
  background-color: #1f1f20;
  margin-top: 0;
  color: white;

  @media only screen and (max-width: 920px) {
    height: 20vh;
  }
`;

const EmailtWrapper = styled.div`

    width: 100vw;
    height: 50vh;
    position: relative;

`;

class Contact extends React.Component {
  render() {
    return (
      <ContactWrapper>
        <ContactHeader>Skontaktuj się z nami</ContactHeader>
        <ContactList></ContactList>
        <EmailtWrapper>
          <Email></Email>
        </EmailtWrapper>
      </ContactWrapper>
    );
  }
}

export default Contact;
