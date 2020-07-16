import React, { Component } from "react";
import "./IndvSV-Styles.css";
import TopNav from "../../Navigation/TopNav/TopNav";
import {
  FaThumbsUp,
  FaRegThumbsDown,
  FaTimes,
  FaThumbsDown,
} from "react-icons/fa";

class IndivSupplementView extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopNav />
        <h4>Supplement View</h4>
        <div className="card-container">
          <div className="supplement-card">
            <div className="like-container">
              <div className="like">

                <div className="fav">

                <button>
                  <FaThumbsUp 
                  id="btn"
                  />
                </button>
                <div className="count-up">5</div>
                </div>

            <div className="not-fav">

                <button>
                  <FaThumbsDown 
                   id="btn"
                  />
                </button>
                <div className="count-down">0</div>
            </div>


              </div>
            </div>
            <div className="left">
              <div id="title">Name:</div>
              <div id="entry">Michael Norris</div>
              <br />
              <br />

              <div id="title">Date Stamp:</div>
              <div id="entry">7/16/20</div>
              <br />
              <br />
            </div>
            <div className="right">
              <div id="title">Supplement Name:</div>
              <div id="entry">Tart Cherry</div>
              <br />
              <br />

              <div id="title">Supplement Description:</div>
              <div id="entry" className="entry-description">
                I am a description of the Supplement.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndivSupplementView;
