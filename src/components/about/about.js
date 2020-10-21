import React from "react";
import styled from "styled-components";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import HomeIcon from "@material-ui/icons/Home";
import DoneIcon from "@material-ui/icons/Done";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const Contener = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  min-height: 900px;

  @media only screen and (max-width: 920px) {
    height: 150vh;
    min-height: 1800px;
  }

  @media only screen and (max-width: 720px) {
    height: 220vh;
  }
`;

const Article = styled.article`
  width: 80vw;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  height: 95%;
  top: 10vh;
  left: 10vw;
  background-color: white;
  box-shadow: -2px 10px 9px 11px rgba(0, 0, 0, 0.06);
  text-align: center;
  display: ${(props) => props.display};
  opacity: 1;
  animation: move 1s;

  @media only screen and (max-width: 720px) {
    height: 90%;
  }


  @keyframes move {
    from {
      top: 50vh;
      opacity: 0;
    }
    to {
      top: 10vh;
      opacity: 1;
    }
  }
`;

const AboutUs = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600&display=swap");
  font-family: "Sansita Swashed", cursive;
  color: #383838;
  padding: 20px 20px 20px 20px;
  font-size: 50px;
  margin-top: 5vh;
  @media only screen and (max-width: 720px) {
    margin-top: 0;
  }
`;

const Content = styled.p`
  font-size: 24px;
  padding: 0px 20px 20px 20px;
  @media only screen and (max-width: 720px) {
    font-size: 17px;
    letter-spacing: 1px;
  }
`;

const OnTime = styled(AlarmOnIcon)`
  color: #403f3e;
  margin-left: auto;
  margin-right: auto;
`;
const OnHome = styled(HomeIcon)`
  color: #403f3e;
  margin-left: auto;
  margin-right: auto;
`;

const OnDone = styled(DoneIcon)`
  color: #403f3e;
  margin-left: auto;
  margin-right: auto;

`;

const OnHappy = styled(InsertEmoticonIcon)`
  color: #403f3e;
  margin-left: auto;
  margin-right: auto;

`;

const IconWrapper = styled.span`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
`;

const OurProperties = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  height: 20%;
  margin-top: 5%;
  font-size: 30px;
  @media only screen and (max-width: 920px) {
    margin-top: 5%;
    height: 50%;
    grid-template-columns: 50% 50%;
  }
  @media only screen and (max-width: 720px) {
    height: 60%;
    margin-top: 20%;
    grid-template-columns: 100%;
  }
`;

const IconContent = styled.span`
    text-align:center;
    padding: 40px 40px 40px 40px;
    display: block;
    font-size: 30px;
    font-weight: 700;
    @media only screen and (max-width: 720px) {
      font-size: 20px;
  }

`

const IconHeader = styled.h1`

    font-size: 50px;
    color: #403f3e;

    @media only screen and (max-width: 720px) {
      font-size: 30px;
  }

`;

class About extends React.Component {
  state = {
    display: "none",
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    this.setState({
      display: "block",
    });
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <Contener>
        <Article display={this.state.display}>
          <AboutUs>O nas</AboutUs>
          <Content>
            Wykonany przez nas remont czy wykończenie mieszkania cechuje przede
            wszystkim kompleksowość. Podejmujemy się bowiem wykończenia mieszkań
            w stanie deweloperskim, a także remontów mieszkań z rynku wtórnego.
            Oferta naszej firmy obejmuje także profesjonalny odbiór techniczny
            mieszkania od dewelopera.
            <br />
            <br />
            Jesteśmy firmą działającą na terenie Krakowa i okolic. Z
            wykończeniami jesteśmy związani od wielu lat przez co zgromadziliśmy
            juz dziesiątki zadowolonych klientów
            
          </Content>
          <div><IconHeader>CECHUJE NAS</IconHeader>
          <OurProperties>
            <IconWrapper>
              <OnTime style={{ fontSize: 100}}/>
              <IconContent>Szybka Realizacja</IconContent>
            </IconWrapper>
            <IconWrapper>
              <OnHome style={{ fontSize: 100}}/>
              <IconContent>Profesjonalne Podejście</IconContent>
            </IconWrapper>
            <IconWrapper>
              <OnDone style={{ fontSize: 100}}/>
              <IconContent>Dokładność</IconContent>
            </IconWrapper>
            <IconWrapper>
              <OnHappy style={{ fontSize: 100}}/>
              <IconContent>Zadowlony Klient</IconContent>
            </IconWrapper>
          </OurProperties>
          </div>
        </Article>
      </Contener>
    );
  }
}

export default About;
