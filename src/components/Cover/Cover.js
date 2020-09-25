import React from "react";
import style from "./Cover.module.scss";

export default function Cover() {
  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <div className={style.heading}>
          <h1>Sense Intelligence</h1>
          <h5>Use it to make the world a better place</h5>
        </div>
        <div className={style.contentBody}>
            Intelsence AI building world class team of AI Research,Data Science
            , Machine Learning Engineers, Software Engineers , Product Manager,
            and Visioasies to help realize this potential , pushing the
            boundaries of what AI can do and advancing the state of the art.
        </div>
        <div className={style.buttom}>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
