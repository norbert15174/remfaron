import React from "react";
import RealIteam from "./item/realisationitem";
import styled from "styled-components";
import real1 from './../../asserts/offer/Realisation/1/real1.jpg';
import real2 from './../../asserts/offer/Realisation/2/real2.jpg';
import real3 from './../../asserts/offer/Realisation/3/real3.jpg';

const RealWrapper = styled.div`
  width: 100vw;
  height: 98vh;
  background-color: #282829;
  display: grid;
  grid-template-columns: 50vw 50vw;
  position: relative;
  @media only screen and (max-width: 920px){
        grid-template-columns: 100vw;
        height: 240vh;
        min-height: 2000px;
    }
`;

const Realisation = () => {
  return (
    <RealWrapper>
      <RealIteam img=""/>
      <RealIteam img={real2}/>
      <RealIteam img={real3}/>
      <RealIteam img={real1}/>
    </RealWrapper>
  );
};

export default Realisation;
