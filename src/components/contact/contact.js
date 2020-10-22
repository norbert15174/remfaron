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
  -webkit-box-shadow: 1px 5px 6px 5px rgba(31,31,32,1);
-moz-box-shadow: 1px 5px 6px 5px rgba(31,31,32,1);
box-shadow: 1px 5px 6px 5px rgba(31,31,32,1);

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

  myRefContact = React.createRef();

  componentDidMount = () => {
    console.log(this.myRefContact.current.offsetTop);
  }


  render() {
    return (
      <ContactWrapper ref={this.myRefContact}>
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
