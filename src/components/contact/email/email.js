import React from "react";
import styled from "styled-components";
import "./email.css";
import EmailInput from "./emailinput";

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 50vw 50vw;
  height: 100%;
  width: 100%;
  position: relative;
`;

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
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

class Email extends React.Component {
  render() {
    return (
      <FormContainer>
        <InputContainer>
          <EmailInput />
          <EmailInput />
          <EmailInput />
        </InputContainer>
        <InputContainer>
          <InputDescription
            className="description"
            name="content"
            placeholder=" "
          ></InputDescription>
          <LabelDescription className="labelek"></LabelDescription>
        </InputContainer>
      </FormContainer>
    );
  }
}

export default Email;
