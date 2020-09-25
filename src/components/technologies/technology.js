import React, { Component } from "react";
import TechnologyStyle from "./technology.module.scss";
import TechnologyItem from "./technologyItems";

class Technology extends Component {
  data = [
    {
      id: 1,
      title: "Sensebots",
      discription:
        "The SenseBots platform provides the infrastructure and core capabilities to power an omni-channel conversational exprience.",
      link: "#",
      logo: "images/technology1.svg",
    },
    {
      id: 2,
      title: "SenseSpeech",
      discription:
        "Our Automatic Speech Recognition engine leverages the most advanced forms of Deep Learning.",
      link: "#",
      logo: "images/technology2.svg",
    },
    {
      id: 3,
      title: "SenseImage",
      discription:
        "Document understanding, natural language interface, text representation and generalization, systematic. Generalization, language grounding.",
      link: "#",
      logo: "images/technology3.svg",
    },
    {
      id: 4,
      title: "SenseWare",
      discription:
        "Build brand-unique natural language applications for customer care with highly engaging user experiences and human-like conversational interactions.",
      link: "#",
      logo: "images/technology4.svg",
    },
  ];
  render() {
    return (
      <div className={TechnologyStyle.container}>
        <hr />
        <h1 className={TechnologyStyle.headerText}>Technologies</h1>
        <p className={TechnologyStyle.subHeader}>
          Intelsense has developd an entaire stack of AI driven innovative
          technologies that allow enterprises to realize the digital
          transformation of business model.
        </p>
        <div className={TechnologyStyle.content}>
          {this.data.map((item) => (
            <TechnologyItem key={item.key} data={item} />
          ))}
        </div>

        <hr />
      </div>
    );
  }
}

export default Technology;
