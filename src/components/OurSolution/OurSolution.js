import React from "react";
// import 'bootstrap/dist/css/bootstrap.css'
import Carousel from "react-elastic-carousel";

import style from "./content.module.scss";

class OurSolution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          image: "./images/Asset_15.png",
          detail:
            "Some quick example text to build on the card title and make\n" +
            "                                        up the bulk of the card's content.",
        },
      ],
    };
  }

  render() {
    const breakPoint = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
    return (
      <div className={style.container}>
        <div className={style.content}>
          <h4>Building solutions that impact us all for the better</h4>
          <p>
            Our impact on the world is driven by what our products enable . Read
            our inaugural Environmental , Social and Governance(ESG) report to
            learn how we are driving positive change and taking action for our
            Healthcare and Enterprise customers - during three challenging time
            and always
          </p>
        </div>
        <div className={style.carousel}>
          <Carousel breakPoints={breakPoint} className={style.carBody}>
            <div
              className={style.sliderBody}
              style={{ width: 277, textAlign: "center" }}
            >
              <img
                style={{ width: 279, height: 160 }}
                src="images/Asset_15.png"
                alt=""
              />
              <div
                className={style.slider}
                style={{
                  color: "black",
                  width: 278,
                  textAlign: "center",
                  backgroundColor: "#D1D1D3",
                }}
              >
                <h1 style={{ fontWeight: 600 }}>Banking</h1>
                <p>
                  Our impact on the world is driven by what our products enable
                  . Read our inaugural Environmental .{" "}
                </p>
              </div>
              <button
                style={{
                  fontWeight: 600,
                  color: "white",
                  width: 279,
                  backgroundColor: "#0099dc",
                  marginBottom: 10,
                  textAlign: "center",
                }}
                type="submit"
              >
                Learn More
              </button>
            </div>

            <div
              className={style.sliderBody}
              style={{ width: 277, textAlign: "center" }}
            >
              <img
                style={{ width: 279, height: 160 }}
                src="images/Asset_21.png"
                alt=""
              />
              <div
                className={style.slider}
                style={{
                  color: "black",
                  width: 278,
                  textAlign: "center",
                  backgroundColor: "#D1D1D3",
                }}
              >
                <h1 style={{ fontWeight: 600 }}>Healthcare</h1>
                <p>
                  Our impact on the world is driven by what our products enable
                  . Read our inaugural Environmental ,{" "}
                </p>
              </div>
              <button
                style={{
                  fontWeight: 600,
                  color: "white",
                  width: 279,
                  backgroundColor: "#0099dc",
                  marginBottom: 10,
                  textAlign: "center",
                }}
                type="submit"
              >
                Learn More
              </button>
            </div>
            <div
              className={style.sliderBody}
              style={{ width: 277, textAlign: "center" }}
            >
              <img
                style={{ width: 279, height: 160 }}
                src="images/Asset_20.png"
                alt=""
              />
              <div
                className={style.slider}
                style={{
                  color: "black",
                  width: 278,
                  textAlign: "center",
                  backgroundColor: "#D1D1D3",
                }}
              >
                <h1 style={{ fontWeight: 600 }}>Insurance</h1>
                <p>
                  Our impact on the world is driven by what our products enable
                  . Read our inaugural Environmental ,{" "}
                </p>
              </div>
              <button
                style={{
                  fontWeight: 600,
                  color: "white",
                  width: 279,
                  backgroundColor: "#0099dc",
                  marginBottom: 10,
                  textAlign: "center",
                }}
                type="submit"
              >
                Learn More
              </button>
            </div>
            <div
              className={style.sliderBody}
              style={{ width: 277, textAlign: "center" }}
            >
              <img
                style={{ width: 279, height: 160 }}
                src="images/Asset_15.png"
                alt=""
              />
              <div
                className={style.slider}
                style={{
                  color: "black",
                  width: 278,
                  textAlign: "center",
                  backgroundColor: "#D1D1D3",
                }}
              >
                <h1 style={{ fontWeight: 600 }}>Retail</h1>
                <p>
                  Our impact on the world is driven by what our products enable
                  . Read our inaugural Environmental ,{" "}
                </p>
              </div>
              <button
                style={{
                  fontWeight: 600,
                  color: "white",
                  width: 279,
                  backgroundColor: "#0099dc",
                  marginBottom: 10,
                  textAlign: "center",
                }}
                type="submit"
              >
                Learn More
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default OurSolution;
