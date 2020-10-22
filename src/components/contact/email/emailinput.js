import React from "react";
import styled from "styled-components";
import "./email.css";

const MainInputContainer = styled.div`
  width: 60%;
  height: 10%;
  margin-left: 40%;
  margin-top: 5%;
  position: relative;
  @media only screen and (max-width: 920px){
        top: 20vh;
        width: 100%;
        margin-left: 0;
        margin-top: 10%;
    }
`;

const MailInput = styled.input`
  width: 80%;
  height: 30px;
  padding: 10px 10px 10px 10px;
  font-size: 15px;
  background-color: #282829;
  -webkit-box-shadow: 0px 0px 6px 2px rgba(35,166,213,1);
-moz-box-shadow: 0px 0px 6px 2px rgba(35,166,213,1);
box-shadow: 0px 0px 6px 2px rgba(35,166,213,1);
  outline: none;
  color: #43A4DC;
  border: none;
  @media only screen and (max-width: 920px){
        margin-left: 10%;
        height: 40px;
    }
`;

const LabelInput = styled.label`
  transition: all 1s;
  position: absolute;
  left: 10px;
  top: 5px;
  color: white;
  @media only screen and (max-width: 920px){
        left: 11%;
        top: 10px;
    }
`;

class EmailInput extends React.Component {


  state = {
    name: "",
  }

  constructor(props){
    super(props);
    this.state.name = props.name;
  };


  render() {
    return (
      <MainInputContainer>
        <MailInput
          className="MailInputChange"
          type="text"
          name={this.state.name}
          placeholder=" "
        />
        <LabelInput className="LabelInputChange">{this.state.name}</LabelInput>
      </MainInputContainer>
    );
  }
}

export default EmailInput;
