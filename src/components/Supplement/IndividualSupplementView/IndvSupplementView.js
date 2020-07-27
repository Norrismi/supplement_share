import React from "react";
import "./IndvSV-Styles.css";
import TopNav from "../../Navigation/TopNav/TopNav";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from 'moment'

const IndvSupplementView = (props) => {
  const { supplement } = props;
  //console.log(props)

  if (supplement) {
    return (
      <div>
        <TopNav />
        {/* <h4 className="indv-title-one">Supplement View</h4> */}
        <h5 className="indv-title-two">{supplement.supplementName}</h5>
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
              <div id="indv-entry">{supplement.supplementName}</div>
              <br />
              <br />
      
              <div id="indv-title">Date Stamp:</div>
    <div id="indv-entry">{moment(supplement.createdDate).format('LL')}</div>
              <br />
              <br />
            </div>
            <div className="indv-right">
              <div id="indv-title">Supplement Name:</div>
              <div id="indv-entry">{supplement.supplementName}</div>
              <br />
              <br />

              <div id="indv-title">Supplement Description:</div>
              <div id="indv-entry" className="entry-description">
                {supplement.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        {/* Needs to be centered */}
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const supplements = state.firestore.data.supplements;
  const supplementId = supplements ? supplements[id] : null;

  return {
    supplement: supplementId,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "supplements" }])
)(IndvSupplementView);
