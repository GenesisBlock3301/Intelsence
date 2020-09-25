import React, { Component } from "react";
import ResearchStyle from "./research.module.scss";

class Image extends Component {
  render() {
    return (
      <div id={ResearchStyle.image}>
        <img src={this.props.img} alt="image" />
      </div>
    );
  }
}

export default Image;
