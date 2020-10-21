import React from "react";
import styled from "styled-components";

const ViewMore = styled.a`
  width: 100%;
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  position: absolute;
  text-align: center;
  bottom: 10%;
  display: ${(props) => (props.clicked === "yes" ? "block" : "none")};
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.6);
  
  @media only screen and (max-width: 920px) {
    font-size: 14px;
  }
`;

const RealIteamList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto auto auto auto;

  &:before {
    background-image: url(${(props) => props.image});
    background-size: 100% 100%;
    background-repeat: none;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    opacity: ${(props) => (props.clicked === "yes" ? "0.1" : "1")};
    transition: all 1s;
  }
  &:after {
    display: ${(props) => (props.clicked === "yes" ? "block" : "none")};
    transition: opacity 3s;
    width: 80%;
    height: 60%;
    left: 10%;
    top: 30%;
    font-size: 20px;
    color: white;

    position: absolute;
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.";

    @media only screen and (max-width: 920px) {
      font-size: 14px;
      top: 30%;
    }
  }

  &:nth-child(1):after{
    display: block !important;
  }
`;

const Header = styled.h1`
    width: 100%;
    text-align: center;
    margin-top : 5%;
`;

class RealItem extends React.Component {
  prop = {
    img: "",
  };

  constructor(props) {
    super(props);
    this.prop = { img: props.img };
  }

  state = {
    clicked: "",
  };

  handleClick = (e) => {
    this.setState({
      clicked: this.state.clicked === "yes" ? "no" : "yes",
    });
  };

  render() {
    return (
      <RealIteamList
        onClick={this.handleClick}
        image={this.prop.img}
        clicked={this.state.clicked}
      >
          <Header>Realizacje zleceń naszych klientów</Header>
        {this.props.img ? <ViewMore href="" clicked={this.state.clicked}>
          Dowiedz się więcej
        </ViewMore> : null}
      </RealIteamList>
    );
  }
}

export default RealItem;
