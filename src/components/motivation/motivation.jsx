import React, { Component } from "react";
import LeaderTalk from "./leaderTalks";
import MotivationStyle from "./leaderTalks.module.scss";
import BottomPart from "./bottomPart";

class Motivation extends Component {
  render() {
    return (
      <div className={MotivationStyle.mainSection}>
        <LeaderTalk />
        <BottomPart />
      </div>
    );
  }
}

export default Motivation;
