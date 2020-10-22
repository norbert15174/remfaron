import React from "react";
import GlobalStyle from "./../Theme/GlobalStyle";
import Menu from "./../components/menu/menu";
import About from "./../components/about/about";
import Offer from "./../components/offer/offer";
import AppContext from "../context";
import Realisation from "./../components/realisation/realisation";
import Contact from "./../components/contact/contact";
import Footer from "./../components/footer/footer";

class Root extends React.Component {
  state = {
    About: "",
    Offer: "",
    Realisation: "",
    Contact: "",
  };

  
  render() {

    return (
      <>
        <AppContext.Provider>
          <GlobalStyle />
          <Menu />
          <About/>
          <Offer/>
          <Realisation/>
          <Contact/>
          <Footer/>
        </AppContext.Provider>
      </>
    );
  }
}

export default Root;
