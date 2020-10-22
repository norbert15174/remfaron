import React from "react";
import styled from "styled-components";
import "./email.css";
import EmailInput from "./emailinput";
import SendIcon from "@material-ui/icons/Send";

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 50vw 50vw;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #070707;

  @media only screen and (max-width: 920px){
        grid-template-columns: 100vw;
        height: 60vh;
        min-height: 700px;
    }

`;

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100%;

  @media only screen and (max-width: 920px){
        height: 60vh;
        top:-40%;
    }

`;

const InputDescription = styled.textarea`
  width: 80%;
  height: 80%;
  position: absolute;
  left: 10%;
  background-color: #282829;
  outline-style: none;
  border: none;
  padding: 5px 5px 5px 5px;
  color: #43a4dc;
  font-size: 16px;
  -webkit-box-shadow: 0px 0px 6px 2px rgba(35,166,213,1);
-moz-box-shadow: 0px 0px 6px 2px rgba(35,166,213,1);
box-shadow: 0px 0px 6px 2px rgba(35,166,213,1);

`;
const LabelDescription = styled.label`
  &:after {
    position: absolute;
    left: 10%;
    top: 0;
    z-index: 5;
    color: white;
    padding: 5px 5px 5px 5px;
    content: "Message";
    transition: all 1s;
  }
`;

const ButtonSumbitStyled = styled.button`
  position: relative;
  left: 40%;
  top: 10%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 7s ease infinite;
  outline: none;
  border: none;
  font-size: 20px;
  padding: 5px 15px 5px 15px;
  border-radius: 2px;
  color: white;
  vertical-align: middle;
  cursor: pointer;
  display: ${props => props.secondary ? 'none' : 'block'};
  
  @media only screen and (max-width: 920px){
        display: ${props => props.secondary ? 'block' : 'none'};
        top: 90%;
        position: absolute;
    }



  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

class Email extends React.Component {
  render() {
    return (
      <FormContainer>
        <InputContainer>
          <EmailInput name="Imie"/>
          <EmailInput name="E-mail"/>
          <EmailInput name="Temat"/>
          <ButtonSumbitStyled>
            <SendIcon style={{ fontSize: 40 }} />
          </ButtonSumbitStyled>
        </InputContainer>
        <InputContainer>
          <InputDescription
            className="description"
            name="content"
            placeholder=" "
          ></InputDescription>
          <LabelDescription className="labelek"></LabelDescription>
          <ButtonSumbitStyled secondary>
            <SendIcon style={{ fontSize: 40 }} />
          </ButtonSumbitStyled>
        </InputContainer>
      </FormContainer>
    );
  }
}

export default Email;
