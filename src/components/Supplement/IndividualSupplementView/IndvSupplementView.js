import React from "react";
import "./IndvSV-Styles.css";
import TopNav from "../../Navigation/TopNav/TopNav";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const IndivSupplementView = (props) => {
  return (
    <div>
      <TopNav />
      <h4 className="indv-title-one">Supplement View</h4>
      <h5 className="indv-title-two">Supplement Post {props.match.params.id}</h5>
      <div className="indv-card-container">
        <div className="indv-supplement-card">
          <div className="like-container">
            <div className="like">
              <div className="fav">
                <button className="indv-btn">
                  <FaThumbsUp id="indv-btn" />
                </button>
                <div className="count-up">5</div>
              </div>

              <div className="not-fav">
                <button className="indv-btn">
                  <FaThumbsDown id="indv-btn" />
                </button>
                <div className="count-down">0</div>
              </div>
            </div>
          </div>
          <div className="indv-left">
            <div id="indv-title">Name:</div>
            <div id="indv-entry">Michael Norris</div>
            <br />
            <br />

            <div id="indv-title">Date Stamp:</div>
            <div id="indv-entry">7/16/20</div>
            <br />
            <br />
          </div>
          <div className="indv-right">
            <div id="indv-title">Supplement Name:</div>
            <div id="indv-entry">Tart Cherry</div>
            <br />
            <br />

            <div id="indv-title">Supplement Description:</div>
            <div id="indv-entry" className="entry-description">
              I am a description of the Supplement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndivSupplementView;
