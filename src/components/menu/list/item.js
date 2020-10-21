import styled from 'styled-components';
import React from 'react';

const ItemHref = styled.a`
  text-decoration: none;
  color: black;
`;

const ItemLi = styled.li`
  font-size: 20px;
  list-style: none;
  padding: 15px 15px 15px 15px;
  &::before{
    content: '    ';
    display: block;
    width: 0px;  
    top: 40px;
    width: 0px;
    background-color: #E5CE5D;
    position: relative;
    text-align: center;
    transition: width 1s;
    
  }
  &:hover:before{
    padding: 1px 1px 1px 1px;
    width: 100px;
  }
`;


const MenuItem = (props) => {
  return(
    <ItemLi>
      <ItemHref href={props.link}>{props.link}</ItemHref>
    </ItemLi>
  )
    
  
};

export default MenuItem;
