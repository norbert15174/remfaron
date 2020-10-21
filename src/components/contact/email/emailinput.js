import React from "react";
import styled from "styled-components";
import './email.css';

const MainInputContainer = styled.div`

    width: 80%;
    height: 10%;
    margin-left: 10%;
    margin-top: 5%;

`;

const MailInput = styled.input`
    
    width: 60%;
    height: 30px;

`;


const EmailInput = (props) => (


    <MainInputContainer>

        <MailInput name="name" value=""/>

    </MainInputContainer>

);

export default EmailInput;