import React from "react";
import styled, { keyframes } from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";


const backgroundAnime = keyframes`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}


`;

const ContactListHeader = styled.div`
  display: grid;
  width: 90vw;
  grid-template-columns: 30vw 30vw 30vw;
  height: 30%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  min-height: 350px;
  @media only screen and (max-width: 920px) {
    grid-template-columns: 100%;
    height: 50%;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const IconParag = styled.p`
  color: white;
  font-size: 30px;
  left: 0;
  width: 100%;
  text-align: center;

  @media only screen and (max-width: 1200px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 920px) {
    font-size: 20px;
  }
`;


const Phone = styled(PhoneIcon)`

    padding: 30px 30px 30px 30px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${backgroundAnime} 7s ease infinite;
    border-radius: 30px 30px 30px 30px;
    color: white;


`;

const FaceBook = styled(FacebookIcon)`

    padding: 30px 30px 30px 30px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${backgroundAnime} 7s ease infinite;
    border-radius: 30px 30px 30px 30px;
    color: white;


`;

const Email = styled(EmailIcon)`

    padding: 30px 30px 30px 30px;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: ${backgroundAnime} 7s ease infinite;
    border-radius: 30px 30px 30px 30px;
    color: white;


`;

const ContactList = () => (
  <ContactListHeader>
    <IconContainer>
      <Email style={{ fontSize: 130 }}></Email>
      <IconParag>remfaron@gmail.com</IconParag>
    </IconContainer>
    <IconContainer>
      <a href="https://www.facebook.com/remfaron"><FaceBook style={{ fontSize: 130 }}></FaceBook></a>
      <IconParag>Znajdz nas na Facebook'u</IconParag>
    </IconContainer>
    <IconContainer>
      <Phone style={{ fontSize: 130 }}></Phone>
      <IconParag>502 279 020</IconParag>
    </IconContainer>
  </ContactListHeader>
);

export default ContactList;
