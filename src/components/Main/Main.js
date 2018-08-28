import React from "react";
import NavBar from "../NavBar/NavBar.js";
import SideMenu from "../SideMenu/SideMenu.js";
import Content from "../Content/Content.js";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <SideMenu />
        <Content />
      </div>
    );
  }
}

export default Main;
