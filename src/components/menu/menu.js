import React from "react";
import MenuItem from "./list/item";
import styled from "styled-components";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Facebook from "@material-ui/icons/Facebook";
import remfaron from "../../asserts/logo/remfaron.png";
import background_page from "../../asserts/logo/dom.jpg";
import Typed from 'react-typed';
const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;
  top: 0;
  background-image: url(${background_page});
  background-size: 100vw 100%;
  background-repeat: no-repeat;
  min-height: 600px;
`;

const MenuUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 120px);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  right: 10vw;
  top: 0;
  @media only screen and (max-width: 920px)
  {
    grid-template-columns: repeat(5, 100px);
  }
  @media only screen and (max-width: 720px) {
    width: 100%;
    left: 30%;
    top: 40%;
    margin: auto auto auto auto;
    grid-template-columns: 100vw;
  }
`;

const Click = styled.button`
  color: blue;
  display: none;
  position: fixed;
  right: 0;
  z-index: 1000;
  background: none;
  border: none;
  color: black;
  font-size: 30px;
  padding: 10px 10px 10px 10px;
  &:focus,
  &:hover {
    outline: none;
    cursor: pointer;
  }
  @media only screen and (max-width: 720px) {
    display: block;
  }
`;

const MenuWrapper = styled.div`
  width: 100vw;

  margin: 0;
  
  height: 90px;
  z-index: 1;

  @media only screen and (max-width: 720px) {
    position: fixed;
    height: 100vh;
    width: 70vw;
    right: ${(props) => (props.display === "block" ? "0vw" : "-70vw")};
    animation: ${(props) =>
      props.display === "block" ? "mymove 1.5s" : "mymove2 1.5s"};
    display: ${(props) => (props.display === "" ? "none" : "block")};
    background-color: white;

    @keyframes mymove2 {
      from {
        left: 30vw;
      }
      to {
        left: 110vw;
      }
    }
    @keyframes mymove {
      from {
        left: 110vw;
      }
      to {
        left: 30vw;
      }
    }
  }
`;

const Logo = styled.img`
  width: 250px;
  height: 220px;
  position: absolute;
  display: block;
  padding: 15px 15px 15px 15px;
  @media only screen and (max-width: 920px)
  {
    width: 150px;
    height: 130px;
  }
  @media only screen and (max-width: 720px) {
    width: 50vw;
    height: 25vh;
    right: 5vw;
    top: 10vh;
  }
`;

const StartInfo = styled.p`
  position: absolute;
  display: block;
  top: 30vh;
  font-size: 40px;
  padding: 20px 20px 20px 20px;
  border-radius: 20px;
  left: 5vw;
  font-weight: 600;
  animation: asd 2.5s;

  @keyframes asd {
    from {
      left: -30vw;
      opacity: 0;
    }
    to {
      left: 5vw;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 720px) {
    font-size: 22px;
    top: 20vh
  }
`;

const StartSpan = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
  font-family: 'Noto Sans JP', sans-serif;
  color: grey;
  font-weight: 300;
  font-size: 22px;
  animation: go_in 3s;
  position: absolute;
  left: 5vw;
  padding-top: 20px;
  width: 400px;
  opacity: 1;

  @keyframes go_in {
    from {
      left: 100vw;
      opacity: 0;
    }
    to {
      left: 5vw;
      opacity: 1;
    }
  }

  @media only screen and (max-width: 720px) {
    font-weight: 500;
    font-size: 13px;
    width: 250px;
  }
`;

class Menu extends React.Component {
  state = {
    display: "",
  };

  HandleMenuInput = (e) => {
    this.setState({
      display: e,
    });
  };

  render() {
    return (
      <Wrapper>
        <Click
          onClick={() =>
            this.HandleMenuInput(
              this.state.display === "block" ? "none" : "block"
            )
          }
        >
          <DehazeIcon style={{ fontSize: 50 }} />
        </Click>
        <MenuWrapper display={this.state.display}>
          <Logo src={remfaron} alt="logo" />
          <MenuUl>
            <MenuItem link="O nas"></MenuItem>
            <MenuItem link="Oferta"></MenuItem>
            <MenuItem link="Realizacje"></MenuItem>
            <MenuItem link="Kontakt"></MenuItem>
            <Facebook style={{ fontSize: 40 }} />
            
          </MenuUl>
        </MenuWrapper>
        <StartInfo>
        <Typed
                    strings={['Wykończymy twój dom','Stwórz z nami wymarzone miejsce','Zaufaj profesjonalistą']}
                    typeSpeed={70}
                    backDelay={1000}
                    backSpeed={30}
                    loop
                />
          
          <StartSpan>
            <br />
            Kompleksowe wykończenie mieszkań
          </StartSpan>
        </StartInfo>
      </Wrapper>
    );
  }
}

export default Menu;
