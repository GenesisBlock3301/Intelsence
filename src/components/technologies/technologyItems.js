import React, { Component } from "react";
import TechnologyStyle from "./technology.module.scss";

class TechnologyItem extends Component {
  render() {
    const { logo, title, discription } = this.props.data;
    return (
      <div className={TechnologyStyle.item}>
        <img className={TechnologyStyle.logo} src={logo} alt="" />
        <p className={TechnologyStyle.title}>{title}</p>
        <p className={TechnologyStyle.discription}>{discription}</p>
        <a href="#">Learn More</a>
      </div>
    );
  }
}

export default TechnologyItem;
