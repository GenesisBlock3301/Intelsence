import React, { Component } from "react";
import AISolutionStyle from "./aiSolutions.module.scss";
import AISolutionsItems from "./aiSolutionsItems";

class AISolution extends Component {
  data = [
    {
      id: 1,
      title: "NLP Solutions",
      discription:
        "Natural language processing (NLP) is a branch of artificial intelligence that helps computers understand, interept and manipulate human language.",
      link: "#",
      logo: "images/aisolutions-nlp.svg",
    },

    {
      id: 2,
      title: "Computer Vision Solutions",
      discription:
        "Computer Vision is a field of artificial intelligence that trains computers to interpret and understand the visual world. Using digital images from cameras and videos",
      link: "#",
      logo: "images/aisolutions-cv.svg",
    },

    {
      id: 3,
      title: "NLP Solutions",
      discription:
        "Natural language processing (NLP) is a branch of artificial intelligence that helps computers understand, interept and manipulate human language.",
      link: "#",
      logo: "images/aisolutions-da.svg",
    },

    {
      id: 4,
      title: "NLP Solutions",
      discription:
        "Natural language processing (NLP) is a branch of artificial intelligence that helps computers understand, interept and manipulate human language.",
      link: "#",
      logo: "images/aisolutions-da1.svg",
    },
  ];

  render() {
    return (
      <div className={AISolutionStyle.container}>
        <hr />
        <h1 className={AISolutionStyle.header}>AI Solutions</h1>
        <div className={AISolutionStyle.content}>
          {this.data.map((item) => (
            <AISolutionsItems key={item.id} data={item} />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default AISolution;
