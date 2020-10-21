import React from "react";
import GlobalStyle from "./../Theme/GlobalStyle";
import Menu from "./../components/menu/menu";
import About from "./../components/about/about";
import Offer from "./../components/offer/offer";
import AppContext from "../context";
import Realisation from "./../components/realisation/realisation";

class Root extends React.Component {
  render() {
    return (
      <>
        <AppContext.Provider>
          <GlobalStyle />
          <Menu></Menu>
          <About />
          <Offer />
          <Realisation/>
        </AppContext.Provider>
      </>
    );
  }
}

export default Root;
