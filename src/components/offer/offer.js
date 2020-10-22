import React from 'react';
import styled from 'styled-components';
import bathroom from './../../asserts/offer/bathroom.jpg';
import bathroom2 from './../../asserts/offer/bathroom2.jpg';
import livingroom from './../../asserts/offer/livingroom.jpg';
import Item from './item/item';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 30vw 30vw 30vw;
    width: 100vw;
    height: 120vh;
    position: relative;
    min-height: 400px;
    @media only screen and (max-width: 920px){
        position: static;
        grid-template-columns: 90vw;
        min-height: 2000px;
        height: 240vh;
    }
`;

const OfferTag = styled.h1`
    text-align: center;
    width: 100%;
    margin-top: 10%;
    font-size: 70px;
    border: 1px solid black;
    background: linear-gradient(-45deg, #575454, #383636, #8c8989, #ccc8c8);
  background-size: 400% 400%;
  animation: gradient 7s ease infinite;
    color: #1F1F20;
    padding: 100px 100px 100px 100px;

    @media only screen and (max-width: 920px){
        font-size: 30px;
        margin-bottom: 100px;
    }

`;

const OfferWrapper = styled.div`
    background-color: #1F1F20;
`;

const Offer = () =>(
    <OfferWrapper>
        <OfferTag>Nasza Oferta</OfferTag>
    <Wrapper>
        <Item image={bathroom}/>
        <Item image={bathroom2}/>
        <Item image={livingroom}/>

    </Wrapper>
    </OfferWrapper>
);


export default Offer;

