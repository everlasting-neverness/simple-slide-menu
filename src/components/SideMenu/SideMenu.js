import React from "react";
import "./SideMenu.css";

class SideMenu extends React.Component {
  render() {
    return (
      <section className="side-menu">
        <a href="#" className="btn-close">
          &times;
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </section>
    );
  }
}

export default SideMenu;
