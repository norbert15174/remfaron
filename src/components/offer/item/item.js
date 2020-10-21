import React from "react";
import styled from "styled-components";

const ItemOffer = styled.article`
  width: 90%;
  height: 80%;
  top: 10%;
  background-color: #282829;
  position: absolute;
  box-shadow: -2px 10px 9px 11px rgba(0, 0, 0, 0.06);
  @media only screen and (max-width: 920px) {
    width: 100%;
    position: static;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 50%;

  @media only screen and (max-width: 920px) {
    height: 50%;
  }
`;
const ItemDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: 5vw;
  transition: all 1s;
  z-index: 5;

  @media only screen and (min-width: 920px){
    &:nth-child(1) {
      animation: ${(props) => props.animate};
      ${(props) =>
        props.animate === "mymove 1s" &&
        `
        left: 25vw;
        width: 50vw;
        z-index: 100;
    `}
    }

    &:nth-child(2) {
      ${(props) =>
        props.animate === "mymove 1s" &&
        `      
        left: -5vw;
        width: 50vw;
        z-index: 6;      
    `}
    }

    &:nth-child(3) {
      ${(props) =>
        props.animate === "mymove 1s" &&
        `  
        left: -30vw;
        width: 50vw;
        z-index: 300;      
    `}
    }
  }
  
`;

const Article = styled.article`
  color: white;
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  font-size: 30px;
  ul li {
    font-size: 20px;
  }

  @media only screen and (max-width: 920px) {
    font-size: 20px;

    ul li {
      font-size: 14px;
    }
  }
`;

class Item extends React.Component {
  state = {
    x: "",
    animate: "",
  };

  handleOffer = (e) => {
    console.log("asd");
    this.setState({
      animate: this.state.animate === "mymove 1s" ? "mymove2 1s" : "mymove 1s",
    });
  };

  constructor(props) {
    super(props);
    this.state = { x: props.image };
  }

  render() {
    return (
      <ItemDiv animate={this.state.animate} onClick={this.handleOffer}>
        <ItemOffer>
          <ItemImage src={this.state.x} alt={this.state.x} />
          <Article>
            W zakres naszych kompetencji wchodzi:
            <ul>
              <li>Gładzie</li>
              <li>Malowanie</li>
              <li>Układanie Cegły</li>
              <li>Montaż Drzwi</li>
            </ul>
          </Article>
        </ItemOffer>
      </ItemDiv>
    );
  }
}

export default Item;
