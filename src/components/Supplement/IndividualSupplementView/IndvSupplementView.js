import React, { Component } from "react";
import "./IndvSV-Styles.css";
import TopNav from "../../Navigation/TopNav/TopNav";
import { FaShareSquare, FaPen, FaTimes } from "react-icons/fa";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { deleteSupplement } from "../../Store/Actions/supplementActions";
import moment from "moment";

class IndvSupplementView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supplement: this.props.supplement,
    };
  }

  handleDelete = (e) => {
    e.preventDefault();
    deleteSupplement(this.props.id);
  };

  // componentDidMount() {
  //   const { supplement } = this.props;

  //   return !supplement
  //     ? this.setState(
  //         setTimeout(() => {
  //           this.props.history.push("/");
  //         }, 5000)
  //       )
  //     : null;
  // }

  render(props) {
    const { supplement, dispatchDeleteSupplement, id } = this.props;

    if (supplement) {
      return (
        <div>
          <TopNav />

          <div className="indv-card-container">
            <div className="card indv-card z-depth-5   ">
              <div className="card-content white-text indv-card-content">
                <span className="card-title indv-card-title">
                  {supplement.supplementName}
                </span>
                {/* <a className="btn-floating halfway-fab waves-effect waves-light z-depth-5 red">
                <i className="material-icons">add</i>
              </a> */}

                <br />
                <p className="indv-card-text">
                  <strong>Benefit:</strong> {supplement.benefit}
                </p>
                <br />
                <p className="indv-card-text">
                  <strong>Description:</strong> {supplement.description}
                </p>
                <br />
                <p className="indv-card-date">
                  {supplement.createdDate ? (
                    <i>{moment(supplement.createdDate).format("LL")}</i>
                  ) : null}
                </p>
              </div>
              <div className="card-action">
                <div className="action-icons">
                  <button title="Share" className="btn-icon">
                    <FaShareSquare className="share-icon" />
                  </button>

                  <button title="Edit" className="btn-icon">
                    <FaPen className="edit-icon" />
                  </button>

                  <button
                    title="Delete"
                    className="btn-icon"
                    onClick={() => dispatchDeleteSupplement(id)}
                  >
                    <FaTimes className="delete-icon" />
                  </button>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteSupplement: (id) => {
      dispatch(deleteSupplement(id));
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const supplements = state.firestore.data.supplements;
  const supplementId = supplements ? supplements[id] : null;

  return {
    supplement: supplementId,
    id: id,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "supplements" }])
)(IndvSupplementView);

// import React from "react";
// import "./IndvSV-Styles.css";
// import TopNav from "../../Navigation/TopNav/TopNav";
// import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
// import { FaShareSquare, FaPen, FaTimes } from "react-icons/fa";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
// import moment from 'moment'

// const IndvSupplementView = (props) => {
//   const { supplement } = props;
//   //console.log(props)

//   if (supplement) {
//     return (
//       <div>
//         <TopNav />
//         {/* <h4 className="indv-title-one">Supplement View</h4> */}
//         <h5 className="indv-title-two">{supplement.supplementName}</h5>
//         <div className="indv-card-container">
//           <div className="indv-supplement-card">
//             <div className="like-container">
//               <div className="like">
//                 <div className="fav">
//                   <button className="indv-btn">
//                     <FaThumbsUp id="indv-btn" />
//                   </button>
//                   <div className="count-up">5</div>
//                 </div>

//                 <div className="not-fav">
//                   <button className="indv-btn">
//                     <FaThumbsDown id="indv-btn" />
//                   </button>
//                   <div className="count-down">0</div>
//                 </div>
//               </div>
//             </div>
//             <div className="indv-left">
//               <div id="indv-title">Name:</div>
//               <div id="indv-entry">{supplement.supplementName}</div>
//               <br />
//               <br />

//               <div id="indv-title">Date Stamp:</div>
//     <div id="indv-entry">{moment(supplement.createdDate).format('LL')}</div>
//               <br />
//               <br />
//             </div>
//             <div className="indv-right">
//               <div id="indv-title">Supplement Name:</div>
//               <div id="indv-entry">{supplement.supplementName}</div>
//               <br />
//               <br />

//               <div id="indv-title">Supplement Description:</div>
//               <div id="indv-entry" className="entry-description">
//                 {supplement.description}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="container center">
//         {/* Needs to be centered */}
//         <p>Loading project...</p>
//       </div>
//     );
//   }
// };

// const mapStateToProps = (state, ownProps) => {
//   const id = ownProps.match.params.id;
//   const supplements = state.firestore.data.supplements;
//   const supplementId = supplements ? supplements[id] : null;

//   return {
//     supplement: supplementId,
//   };
// };

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: "supplements" }])
// )(IndvSupplementView);
