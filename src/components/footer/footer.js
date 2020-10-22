import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  width: 100%;
  height: 300px;
  background-color: #282829;
  -webkit-box-shadow: 0px -11px 11px 0px rgba(40, 40, 41, 1);
  -moz-box-shadow: 0px -11px 11px 0px rgba(40, 40, 41, 1);
  box-shadow: 0px -11px 11px 0px rgba(40, 40, 41, 1);

  position: relative;
`;

const CopyRight = styled.p`
  text-align: center;
  position: absolute;
  bottom: 10%;
  width: 100%;
  font-size: 25px;
  color: #23a6d5;
  @media only screen and (max-width: 920px){
        font-size: 18px;
    }

`;

const Footer = () => (
  <FooterStyled>
    <CopyRight>© Copyright 2020 RemFaron</CopyRight>
  </FooterStyled>
);

export default Footer;
