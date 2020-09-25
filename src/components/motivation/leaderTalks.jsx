import React, { Component } from "react";
import LeaderTalksStyle from "./leaderTalks.module.scss";

class LeaderTalk extends Component {
  render() {
    return (
      <div className={LeaderTalksStyle.leaderTalk}>
        <div className={LeaderTalksStyle.slide}>
          <div className={LeaderTalksStyle.image}>
            <img
              className={LeaderTalksStyle.circle}
              src="images/motivation1-circle.png"
              alt="image"
            />
            <img
              className={LeaderTalksStyle.message}
              src="images/motivation1-message.png"
              alt="image"
            />
            <img
              className={LeaderTalksStyle.man}
              src="images/motivation1-man.png"
              alt="image"
            />
          </div>
          <div>
            <h2>Industry Leader's Talkies</h2>
            <p>
              "Bots are like new applications, and digital assistants are meta
              apps or like a new browsers. And intelligence is infused into all
              yours interactions. That's the rich platform that we have."
            </p>
            <h5>-Satya Nadella, Microsoft</h5>
          </div>
        </div>
        <div className={LeaderTalksStyle.demonstration}>
          <img src="images/motivation2.png" alt="" />
          <h2>Arrange a demonstration</h2>
          <p>Are you interested to know how our awesome technologies work?</p>
          <a href="#">Learn More</a>
        </div>
      </div>
    );
  }
}

export default LeaderTalk;
