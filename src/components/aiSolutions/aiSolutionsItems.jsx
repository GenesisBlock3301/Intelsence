import React, { Component } from "react";
import AISolutionStyle from "./aiSolutions.module.scss";

class AISolutionsItems extends Component {
  render() {
    const { logo, title, discription } = this.props.data;
    console.log(logo);
    return (
      <div className={AISolutionStyle.items}>
        <img className={AISolutionStyle.logo} src={logo} alt="logo" />
        <p className={AISolutionStyle.title}>{title}</p>
        <p className={AISolutionStyle.discription}>{discription}</p>
        <a href="#">learn more</a>
      </div>
    );
  }
}

export default AISolutionsItems;
